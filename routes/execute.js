const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Execute Python code endpoint
router.post('/', (req, res) => {
  try {
    const { code, input } = req.body;

    if (!code) {
      return res.json({ 
        success: false, 
        output: 'Error: No code provided',
        error: true 
      });
    }

    // Create temporary file
    const tempDir = os.tmpdir();
    const tempFile = path.join(tempDir, `pbl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.py`);

    // Write code to temporary file
    fs.writeFileSync(tempFile, code);

    // Spawn Python process with proper stdio configuration
    const python = spawn('python3', [tempFile], {
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 10000
    });
    let output = '';
    let errorOutput = '';

    // Handle stdout
    python.stdout.on('data', (data) => {
      output += data.toString();
    });

    // Handle stderr
    python.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    // Handle process end
    python.on('close', (code) => {
      // Clean up temp file
      try { 
        fs.unlinkSync(tempFile); 
      } catch (e) {
        console.error('Failed to delete temp file:', e);
      }

      if (code !== 0 && errorOutput) {
        return res.json({
          success: false,
          output: errorOutput,
          error: true
        });
      }

      res.json({
        success: true,
        output: output || '(Code executed successfully - no output)',
        error: false
      });
    });

    // Handle spawn errors
    python.on('error', (err) => {
      try { 
        fs.unlinkSync(tempFile); 
      } catch (e) {}
      
      return res.json({
        success: false,
        output: `Error executing code: ${err.message}`,
        error: true
      });
    });

    // Send input if provided
    if (input && input.trim()) {
      // Send input with proper line endings
      let inputData = input;
      // Ensure input ends with newline
      if (!inputData.endsWith('\n')) {
        inputData += '\n';
      }
      python.stdin.write(inputData);
    }
    python.stdin.end();

    // Timeout after 10 seconds
    setTimeout(() => {
      if (python.exitCode === null) {
        python.kill();
        try { 
          fs.unlinkSync(tempFile); 
        } catch (e) {}
        
        res.json({
          success: false,
          output: 'Error: Code execution timeout (exceeded 10 seconds)',
          error: true
        });
      }
    }, 10000);

  } catch (error) {
    return res.json({
      success: false,
      output: `Server Error: ${error.message}`,
      error: true
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { execSync } = require('child_process');
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
    const tempFile = path.join(tempDir, `pbl_${Date.now()}.py`);

    // Write code to temporary file
    fs.writeFileSync(tempFile, code);

    try {
      // Execute the Python code with timeout
      let command = `python3 ${tempFile}`;
      
      // If input is provided, pipe it to stdin
      if (input && input.trim()) {
        const inputFile = path.join(tempDir, `pbl_input_${Date.now()}.txt`);
        fs.writeFileSync(inputFile, input);
        command = `python3 ${tempFile} < ${inputFile}`;
      }

      const output = execSync(command, {
        timeout: 5000, // 5 second timeout
        encoding: 'utf-8',
        stdio: 'pipe'
      });

      // Clean up
      fs.unlinkSync(tempFile);
      if (input && input.trim()) {
        fs.unlinkSync(path.join(tempDir, `pbl_input_${Date.now()}.txt`));
      }

      return res.json({
        success: true,
        output: output || '(No output)',
        error: false
      });
    } catch (execError) {
      // Clean up
      try { fs.unlinkSync(tempFile); } catch (e) {}

      const errorMessage = execError.stderr || execError.message || String(execError);
      return res.json({
        success: false,
        output: errorMessage,
        error: true
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      output: `Error: ${error.message}`,
      error: true
    });
  }
});

module.exports = router;

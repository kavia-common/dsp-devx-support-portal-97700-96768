#!/bin/bash
cd /home/kavia/workspace/code-generation/dsp-devx-support-portal-97700-96768/dsp_devx_support_pioneer_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


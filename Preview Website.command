#!/bin/bash
cd "$(dirname "$0")" || exit 1
./scripts/preview
result=$?
if [ "$result" -ne 0 ]; then
  echo "Preview stopped with an error. Read the message above."
  read -r -p "Press Return to close…"
fi
exit "$result"

# Private Key Format Guide

## For the validator to work, you need to set the PRIVATE_KEY environment variable.

### Option 1: JSON Array Format (Recommended)

```bash
export PRIVATE_KEY="[123,45,67,89,...]"
```

### Option 2: Base58 Encoded String

```bash
export PRIVATE_KEY="5KJvsngHeMpm884wtkJNzQGaCErckhHJBGFsvd3VyK5qMZXj3hS"
```

### Option 3: Comma-Separated Numbers

```bash
export PRIVATE_KEY="123,45,67,89,..."
```

## How to set it:

1. Create a `.env` file in the root directory
2. Add: `PRIVATE_KEY="your_key_here"`
3. Or run: `export PRIVATE_KEY="your_key_here"` before running the validator

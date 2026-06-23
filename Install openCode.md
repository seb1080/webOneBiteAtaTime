# Install openCode + local model

Install openCode

```bash
brew install anomalyco/tap/opencode
```

Open openCode in the terminal

```bash
opencode
```

Install ollama

<https://ollama.com/download>

Refresh the terminal and open the ollama desktop application

```bash
ollama --help
```

Install a local model

```bash
ollama pull qwen3.6:35b
```

```bash
ollama run qwen3.6:35b
```

## Add Ollama models to opencode

Update the `~/.config/opencode/opencode.json`

```bash
code code  ~/.config/opencode/opencode.json
```

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {
        "qwen3.6:35b": {
          "_launch": true,
          "name": "qwen3.6:35b"
        }
      }
    }
  }
}
```

### Add ollama provider to opencode

- Select ollama in the provider
- Enter `ollama` for the API KEY
- Select the wanted model, like `qwen3.6:35b`

# API 自动生成代码

这里的代码使用 swagger 自动生成为 mock server 供前端使用。

使用自动生成的代码需要将 `main.go` 中的 `import sw "./go"` 代码进行修改。如：`import sw "github.com/qt-sc/api-doc/src/go-server-server-generated/go"`

修改导入后执行 `go run main.go`，在 8080 端口可以看到结果。

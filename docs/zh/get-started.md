# 快速开始

感谢你选择了 [`go-hypixel-api`](https://github.com/Sn0wo2/go-hypixel-api)!  
来快速了解项目并进行安装部署, 然后开始你的项目开发吧!

## 安装

```shell
go get github.com/Sn0wo2/go-hypixel-api
```

## 示范代码

```go
package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/Sn0wo2/go-hypixel-api"
)

func main() {
	c := hypixel.NewClient(os.Getenv("API-Key"), hypixel.NewRateLimit())
	rsp, err := c.Get(hypixel.Request{
		Method: http.MethodGet,
		Header: http.Header{
			"examples": []string{"examples1"},
		},
		Path:   "examples2",
		Params: hypixel.Params{"example3": "examples4"},
	})
	if err != nil {
		panic(err)
	}
	fmt.Println(c.GetRate().GetRemaining())
	fmt.Println(c.GetRate().GetResetAT().Format(time.RFC3339))
	fmt.Println(rsp.Status, string(rsp.Content))
	// ...
}
```

## 限速

在 `hypixel.NewClient` 的参数中传入 `hypixel.RateLimit` 可以自动计算剩余请求次数并自动进行堵塞, 无需手动设置, 设nil则不进行限速计算

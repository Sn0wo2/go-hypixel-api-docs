# Quick Start

Thank you for choosing [`go-hypixel-api`](https://github.com/Sn0wo2/go-hypixel-api)!  
Let’s quickly walk through the project setup and get started with your development!

## Installation

```shell
go get github.com/Sn0wo2/go-hypixel-api
````

## Example Code

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

## Rate Limiting

By passing `hypixel.RateLimit` as a parameter to `hypixel.NewClient`, the client will automatically calculate the remaining request quota and apply blocking as needed.
Set it to `nil` if you do not want rate limiting to be handled automatically.
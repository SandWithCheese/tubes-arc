import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createLazyFileRoute } from "@tanstack/react-router"
import { useState, useCallback } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { json } from "@codemirror/lang-json"
import { atomone } from "@uiw/codemirror-theme-atomone"

export const Route = createLazyFileRoute("/")({
  component: Index,
})

interface FormData {
  method: string
  url: string
}

interface Response {
  data: string
  status: string
}

function Index() {
  const [value, setValue] = useState<string>("")
  const onJsonChange = useCallback((val: string) => {
    setValue(val)
  }, [])

  const [formData, setFormData] = useState<FormData>({
    method: "get",
    url: "",
  })

  const [response, setResponse] = useState<Response>({
    data: "",
    status: "",
  })

  async function sendRequest() {
    if (formData.method === "get") {
      const response = await fetch(formData.url)
      const status = response.status.toString()

      if (!response.ok) {
        setResponse({
          data: "Error",
          status: status,
        })
        return
      }

      let data
      try {
        data = await response.json()
      } catch (e) {
        setResponse({
          data: "Data is not JSON",
          status: status,
        })
        return
      }

      setResponse({
        data: JSON.stringify(data, null, 2),
        status: status,
      })
    } else if (formData.method === "post") {
      const response = await fetch(formData.url, {
        method: "POST",
        body: value,
        headers: {
          "Content-Type": "application/json",
        },
      })

      const status = response.status.toString()

      if (!response.ok) {
        setResponse({
          data: "Error",
          status: status,
        })
        return
      }

      let data
      try {
        data = await response.json()
      } catch (e) {
        setResponse({
          data: "Data is not JSON",
          status: status,
        })
        return
      }

      setResponse({
        data: JSON.stringify(data, null, 2),
        status: status,
      })
    } else if (formData.method === "put") {
      const response = await fetch(formData.url, {
        method: "PUT",
        body: value,
        headers: {
          "Content-Type": "application/json",
        },
      })

      const status = response.status.toString()

      if (!response.ok) {
        setResponse({
          data: "Error",
          status: status,
        })
        return
      }

      let data
      try {
        data = await response.json()
      } catch (e) {
        setResponse({
          data: "Data is not JSON",
          status: status,
        })
        return
      }

      setResponse({
        data: JSON.stringify(data, null, 2),
        status: status,
      })
    } else if (formData.method === "patch") {
      const response = await fetch(formData.url, {
        method: "PATCH",
        body: value,
        headers: {
          "Content-Type": "application/json",
        },
      })

      const status = response.status.toString()

      if (!response.ok) {
        setResponse({
          data: "Error",
          status: status,
        })
        return
      }

      let data
      try {
        data = await response.json()
      } catch (e) {
        setResponse({
          data: "Data is not JSON",
          status: status,
        })
        return
      }

      setResponse({
        data: JSON.stringify(data, null, 2),
        status: status,
      })
    } else if (formData.method === "delete") {
      const response = await fetch(formData.url, {
        method: "DELETE",
      })

      const status = response.status.toString()

      if (!response.ok) {
        setResponse({
          data: "Error",
          status: status,
        })
        return
      }

      let data
      try {
        data = await response.json()
      } catch (e) {
        setResponse({
          data: "Data is not JSON",
          status: status,
        })
        return
      }

      setResponse({
        data: JSON.stringify(data, null, 2),
        status: status,
      })
    } else {
      setResponse({
        data: "Method not supported",
        status: "405",
      })
    }
  }

  return (
    <div
      className="flex h-[calc(100vh-92px)] w-full gap-12 p-6"
      data-aos="fade-up"
    >
      <section className="flex h-full w-1/2 flex-col gap-8">
        <div className="flex gap-4">
          <Select
            defaultValue="get"
            onValueChange={(val: string) => {
              setFormData({ ...formData, method: val })
            }}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="GET" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="get">GET</SelectItem>
              <SelectItem value="post">POST</SelectItem>
              <SelectItem value="put">PUT</SelectItem>
              <SelectItem value="patch">PATCH</SelectItem>
              <SelectItem value="delete">DELETE</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="https://api.myproduct.com/v1/users"
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />

          <Button onClick={sendRequest}>Send</Button>
        </div>
        <div className="h-full">
          <CodeMirror
            value={value}
            extensions={[json()]}
            onChange={onJsonChange}
            theme={atomone}
            className="h-full w-full rounded-xl border border-foreground p-4 text-primary"
          />
        </div>
      </section>
      <section className="flex h-full w-1/2 flex-col gap-8">
        <div className="flex min-h-[40px] items-center justify-center">
          <h1 className="text-2xl text-primary">Preview</h1>
        </div>
        <div className="h-full overflow-hidden">
          <CodeMirror
            value={response.data}
            extensions={[json()]}
            theme={atomone}
            className="h-full w-full overflow-scroll rounded-xl border border-foreground p-4 text-primary"
            editable={false}
          />
        </div>
        {response.status && (
          <div className="flex w-fit flex-col items-center rounded-lg bg-primary p-2">
            <h1 className="text-foreground">Status: {response.status}</h1>
          </div>
        )}
      </section>
    </div>
  )
}

import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import List from "./list"

test("renders List", () => {
  render(<List />)
  render(
    <List
      visits={[
        {
          id: "1",
          ip: "129.123.12.34",
          agent: "mozila",
          city: "tokyo",
          loc: "23,.23",
          referer: "twitter",
          time: "45:23",
        },
      ]}
    />
  )
})

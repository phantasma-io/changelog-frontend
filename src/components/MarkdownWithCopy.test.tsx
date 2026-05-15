import { render, screen } from "@testing-library/react";

import { MarkdownWithCopy } from "./MarkdownWithCopy";

describe("MarkdownWithCopy", () => {
  it("renders one copy button per line in multi-line code blocks", () => {
    render(<MarkdownWithCopy content={"```bash\nfirst command\nsecond command\n```"} />);

    expect(screen.getAllByRole("button", { name: "Copy command" })).toHaveLength(2);
    expect(screen.getByText("first command")).toBeInTheDocument();
    expect(screen.getByText("second command")).toBeInTheDocument();
  });

  it("keeps single-line code blocks as one copyable block", () => {
    render(<MarkdownWithCopy content={"```bash\nonly command\n```"} />);

    expect(screen.getAllByRole("button", { name: "Copy command" })).toHaveLength(1);
    expect(screen.getByText("only command")).toBeInTheDocument();
  });
});

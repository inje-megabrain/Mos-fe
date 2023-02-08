import { Box, Button, Paper } from "@mui/material";
import { Component, CSSProperties, ReactNode } from "react";
import { Rnd } from "react-rnd";

export type WindowType =
  | "dir"
  | "txt"
  | "msg"
  | "pic"
  | "mov"
  | "prompt"
  | "null";

interface BaseWindowFieldProps<T = any> {
  id: string;
  name: string;
  type: WindowType;
  active: boolean;
  payload: T;
  children: ReactNode;
}

export type WindowContext<T = any> = Omit<BaseWindowFieldProps<T>, "children">;

type SetContext<T> = (
  key: keyof WindowContext<T>,
  value: WindowContext<T>[keyof Omit<WindowContext<T>, "id">]
) => void;

export interface BaseWindowProps<T = any> extends BaseWindowFieldProps<T> {
  setContext: SetContext<T>;
  focus(): void;
  destroy(): void;
  hasFocus(): boolean;
}

export type WindowHandle<T = any> = Omit<BaseWindowProps<T>, "children">;

type WindowState = {
  full: boolean;
  height: number;
  width: number;
  x: number;
  y: number;
};

const INITIAL_STATE: WindowState = {
  full: false,
  height: 200,
  width: 200,
  x: 100,
  y: 100,
};

const buttonStyle: CSSProperties = {
  maxWidth: 33,
  padding: 0,
  width: 33,
  margin: 0,
};

export default class BaseWindow extends Component<
  BaseWindowProps,
  WindowState
> {
  constructor(props: Readonly<BaseWindowProps<any>>) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    } as any;
  }

  toggleFullScreen = () => {
    this.setState((prev) => {
      return { full: !prev.full };
    });
  };

  render(): ReactNode {
    return (
      <Rnd
        dragHandleClassName="handle"
        size={{
          width: this.state.full ? document.body.clientWidth : this.state.width,
          height: this.state.full
            ? document.body.clientHeight
            : this.state.height,
        }}
        position={{
          x: this.state.full ? 0 : this.state.x,
          y: this.state.full ? 0 : this.state.y,
        }}
        onMouseDown={this.props.focus}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
          });
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          visibility: this.props.active ? "visible" : "hidden",
          border: "1px solid black",
          zIndex: this.props.hasFocus() ? 1000 : 999,
          background: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 100px",
            }}
          >
            <div
              className="handle"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                cursor: "pointer",
              }}
            >
              {this.props.name}
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <button
                style={buttonStyle}
                onClick={() => this.props.setContext("active", false)}
              >
                _
              </button>
              <button style={buttonStyle} onClick={this.toggleFullScreen}>
                ㅁ
              </button>
              <button style={buttonStyle} onClick={this.props.destroy}>
                X
              </button>
            </div>
          </div>
          {this.props.children}
        </Box>
      </Rnd>
    );
  }
}

import { Box } from "@mui/material";
import {
  Component,
  createRef,
  CSSProperties,
  ReactNode,
  RefObject,
} from "react";
import { Rnd } from "react-rnd";

export type WindowType =
  | "dir"
  | "txt"
  | "msg"
  | "pic"
  | "mov"
  | "prompt"
  | "null";

export type WindowContentNodeProps = {
  // contentRef: RefObject<HTMLDivElement>;
  setState: BaseWindow["setState"];
} & WindowState;

export type WindowContentNode = (props: WindowContentNodeProps) => JSX.Element;

interface BaseWindowFieldProps<T = any> {
  id: string;
  name: string;
  type: WindowType;
  active: boolean;
  payload: T;
  children: WindowContentNode;
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

const buttonStyle: CSSProperties = {
  maxWidth: 33,
  padding: 0,
  width: 33,
  margin: 0,
  marginRight: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#026AFE",
  border: "1px solid white",
  borderRadius: "5px",
  color: "white",
};
const buttonStyle2: CSSProperties = {
  maxWidth: 33,
  padding: 0,
  width: 33,
  margin: 0,
  marginRight: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#E46445",
  border: "1px solid white",
  borderRadius: "5px",
  color: "white",
};

export default class BaseWindow extends Component<
  BaseWindowProps,
  WindowState
> {
  constructor(props: Readonly<BaseWindowProps<any>>) {
    super(props);
    this.state = {
      full: false,
      height: document.body.clientHeight / 2,
      width: document.body.clientWidth / 2,
      x: document.body.clientWidth / 4,
      y: document.body.clientHeight / 4,
    };
  }

  toggleFullScreen = () => {
    this.setState((prev) => {
      return { full: !prev.full };
    });
  };

  render(): ReactNode {
    return (
      <Rnd
        disableDragging={this.state.full}
        enableResizing={!this.state.full}
        dragHandleClassName="handle"
        size={{
          width: this.state.full ? document.body.clientWidth : this.state.width,
          height: this.state.full
            ? document.body.clientHeight
            : this.state.height,
        }}
        minWidth={200}
        minHeight={200}
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
          border: "3px solid #026AFE",
          borderRadius: "10px 10px 0px 0px",
          zIndex: this.props.hasFocus() ? 1002 : 999,
          background: "white",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
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
                cursor: "grab",
                padding: "0.3em 0.8em",

                backgroundColor: "#026AFE",
                borderTopLeftRadius: "10px",
              }}
            >
              {this.props.name}
            </div>
            <div
              style={{
                display: "flex",
                padding: "0.3em 0.8em",
                backgroundColor: "#026AFE",
                borderTopRightRadius: "10px",
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
              <button style={buttonStyle2} onClick={this.props.destroy}>
                ✖
              </button>
            </div>
          </div>
          <div style={{ flex: 1, height: "100%", width: "100%" }}>
            {this.props.children({ setState: this.setState, ...this.state })}
          </div>
        </Box>
      </Rnd>
    );
  }
}

import { ReactElement } from "react";
import {
  render as rtlRender,
  RenderOptions,
  screen,
  within,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { AllTheProviders } from "./test-providers";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render, screen, within, fireEvent, waitFor };

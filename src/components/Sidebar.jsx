import { useMultiformcontext } from "../context/Multiformcontext";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

export function Sidebar() {
  const { sidebararray, currentkey, state, setState } = useMultiformcontext();
  const inputEl = useRef(null);
  useEffect(() => {
    const noseleem = sidebararray.length;
    const tooth = inputEl.current.scrollHeight;
    const elemdist = Math.floor(tooth / noseleem);
    const scrollvalue = elemdist * state;
    inputEl.current.scrollTo({
      top: scrollvalue,
      behavior: "smooth",
    });
  }, [state, sidebararray.length]);
  return (
    <Box
      sx={{
        padding: "5rem",
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
      }}
    >
      <div className="sccont element">
        <div ref={inputEl} className="elementsidebar">
          {/* bg-gray */}
          {[...sidebararray].map((item, id) => {
            return (
              <div
                onClick={() => setState(item.index)}
                className={
                  currentkey === item.id
                    ? "selected-insidebar bg-gray"
                    : "selected-insidebar"
                }
                key={item.id}
              >
                <img
                  className="selected-insidebarimage"
                  src={item.imageurl}
                  alt={item.id}
                  loading="lazy"
                />
                <p className="elementsidebar__text">{item.nameval}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
}

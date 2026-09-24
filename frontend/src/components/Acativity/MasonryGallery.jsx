// import {
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import { gsap } from "gsap";

// import "./MasonryGallery.css";


// /* =========================================
//    RESPONSIVE COLUMNS
// ========================================= */

// const useMedia = (queries, values, defaultValue) => {
//   const get = () => {
//     if (typeof window === "undefined") {
//       return defaultValue;
//     }

//     return (
//       values[
//         queries.findIndex((query) =>
//           window.matchMedia(query).matches
//         )
//       ] ?? defaultValue
//     );
//   };

//   const [value, setValue] = useState(get);

//   useEffect(() => {
//     const mediaQueries = queries.map((query) =>
//       window.matchMedia(query)
//     );

//     const handler = () => {
//       setValue(get());
//     };

//     mediaQueries.forEach((mediaQuery) => {
//       mediaQuery.addEventListener("change", handler);
//     });

//     return () => {
//       mediaQueries.forEach((mediaQuery) => {
//         mediaQuery.removeEventListener("change", handler);
//       });
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [queries]);

//   return value;
// };


// /* =========================================
//    MEASURE CONTAINER
// ========================================= */

// const useMeasure = () => {
//   const ref = useRef(null);

//   const [size, setSize] = useState({
//     width: 0,
//     height: 0,
//   });

//   useLayoutEffect(() => {
//     if (!ref.current) return;

//     const resizeObserver = new ResizeObserver(
//       ([entry]) => {
//         const { width, height } = entry.contentRect;

//         setSize({
//           width,
//           height,
//         });
//       }
//     );

//     resizeObserver.observe(ref.current);

//     return () => {
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return [ref, size];
// };


// /* =========================================
//    PRELOAD IMAGES
// ========================================= */

// const preloadImages = async (urls) => {
//   await Promise.all(
//     urls.map(
//       (src) =>
//         new Promise((resolve) => {
//           const img = new Image();

//           img.src = src;

//           img.onload = resolve;
//           img.onerror = resolve;
//         })
//     )
//   );
// };


// /* =========================================
//    MASONRY GALLERY
// ========================================= */

// const MasonryGallery = ({
//   items,

//   ease = "power3.out",

//   duration = 0.6,

//   stagger = 0.05,

//   animateFrom = "bottom",

//   scaleOnHover = true,

//   hoverScale = 0.95,

//   blurToFocus = true,

//   colorShiftOnHover = false,
// }) => {

//   /* -----------------------------------------
//      RESPONSIVE COLUMNS
//   ----------------------------------------- */

//   const columns = useMedia(
//     [
//       "(min-width:1500px)",
//       "(min-width:1000px)",
//       "(min-width:600px)",
//       "(min-width:400px)",
//     ],
//     [5, 4, 3, 2],
//     1
//   );


//   /* -----------------------------------------
//      CONTAINER SIZE
//   ----------------------------------------- */

//   const [containerRef, { width }] = useMeasure();


//   const [imagesReady, setImagesReady] =
//     useState(false);


//   /* -----------------------------------------
//      GAP BETWEEN IMAGES
//   ----------------------------------------- */

//   const GAP = 15;


//   /* -----------------------------------------
//      PRELOAD
//   ----------------------------------------- */

//   useEffect(() => {
//     preloadImages(items.map((item) => item.img))
//       .then(() => {
//         setImagesReady(true);
//       });
//   }, [items]);


//   /* =========================================
//      CREATE MASONRY GRID
//   ========================================= */

//   const grid = useMemo(() => {

//     if (!width || !items.length) {
//       return [];
//     }


//     const colHeights = new Array(columns).fill(0);


//     /*
//       Subtract gaps from total width.

//       Example:

//       3 columns

//       width
//       ├──────┤ 15px ├──────┤ 15px ├──────┤
//     */

//     const columnWidth =
//       (width - GAP * (columns - 1)) / columns;


//     return items.map((child) => {

//       /*
//         Find shortest column
//       */

//       const col =
//         colHeights.indexOf(
//           Math.min(...colHeights)
//         );


//       /*
//         X position
//       */

//       const x =
//         columnWidth * col +
//         GAP * col;


//       /*
//         Image height
//       */

//       const height =
//         child.height / 2;


//       /*
//         Y position
//       */

//       const y =
//         colHeights[col];


//       /*
//         Add image height + gap
//       */

//       colHeights[col] +=
//         height + GAP;


//       return {
//         ...child,

//         x,

//         y,

//         w: columnWidth,

//         h: height,
//       };
//     });

//   }, [columns, items, width]);


//   /* =========================================
//      CALCULATE TOTAL GRID HEIGHT
//   ========================================= */

//   const gridHeight = useMemo(() => {

//     if (!grid.length) {
//       return 0;
//     }


//     return Math.max(
//       ...grid.map(
//         (item) => item.y + item.h
//       )
//     );

//   }, [grid]);


//   /* =========================================
//      INITIAL POSITION
//   ========================================= */

//   const getInitialPosition = (item) => {

//     const containerRect =
//       containerRef.current?.getBoundingClientRect();


//     if (!containerRect) {
//       return {
//         x: item.x,
//         y: item.y,
//       };
//     }


//     let direction = animateFrom;


//     if (animateFrom === "random") {

//       const directions = [
//         "top",
//         "bottom",
//         "left",
//         "right",
//       ];

//       direction =
//         directions[
//           Math.floor(
//             Math.random() *
//               directions.length
//           )
//         ];
//     }


//     switch (direction) {

//       case "top":

//         return {
//           x: item.x,
//           y: -200,
//         };


//       case "bottom":

//         return {
//           x: item.x,
//           y:
//             window.innerHeight + 200,
//         };


//       case "left":

//         return {
//           x: -200,
//           y: item.y,
//         };


//       case "right":

//         return {
//           x:
//             window.innerWidth + 200,
//           y: item.y,
//         };


//       case "center":

//         return {
//           x:
//             containerRect.width / 2 -
//             item.w / 2,

//           y:
//             containerRect.height / 2 -
//             item.h / 2,
//         };


//       default:

//         return {
//           x: item.x,
//           y: item.y + 100,
//         };
//     }
//   };


//   /* =========================================
//      ANIMATION
//   ========================================= */

//   const hasMounted =
//     useRef(false);


//   useLayoutEffect(() => {

//     if (!imagesReady) {
//       return;
//     }


//     grid.forEach((item, index) => {

//       const selector =
//         `[data-key="${item.id}"]`;


//       const animationProps = {
//         x: item.x,
//         y: item.y,
//         width: item.w,
//         height: item.h,
//       };


//       if (!hasMounted.current) {

//         const initialPos =
//           getInitialPosition(item);


//         const initialState = {

//           opacity: 0,

//           x: initialPos.x,

//           y: initialPos.y,

//           width: item.w,

//           height: item.h,

//           ...(blurToFocus && {
//             filter: "blur(10px)",
//           }),
//         };


//         gsap.fromTo(
//           selector,

//           initialState,

//           {
//             opacity: 1,

//             ...animationProps,

//             ...(blurToFocus && {
//               filter: "blur(0px)",
//             }),

//             duration: 0.8,

//             ease: "power3.out",

//             delay: index * stagger,
//           }
//         );

//       } else {

//         gsap.to(selector, {

//           ...animationProps,

//           duration,

//           ease,

//           overwrite: "auto",

//         });

//       }

//     });


//     hasMounted.current = true;

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     grid,
//     imagesReady,
//     stagger,
//     animateFrom,
//     blurToFocus,
//     duration,
//     ease,
//   ]);


//   /* =========================================
//      HOVER
//   ========================================= */

//   const handleMouseEnter =
//     (e, item) => {

//       const selector =
//         `[data-key="${item.id}"]`;


//       if (scaleOnHover) {

//         gsap.to(selector, {

//           scale: hoverScale,

//           duration: 0.3,

//           ease: "power2.out",

//         });
//       }


//       if (colorShiftOnHover) {

//         const overlay =
//           e.currentTarget.querySelector(
//             ".color-overlay"
//           );


//         if (overlay) {

//           gsap.to(overlay, {

//             opacity: 0.3,

//             duration: 0.3,

//           });

//         }
//       }
//     };


//   const handleMouseLeave =
//     (e, item) => {

//       const selector =
//         `[data-key="${item.id}"]`;


//       if (scaleOnHover) {

//         gsap.to(selector, {

//           scale: 1,

//           duration: 0.3,

//           ease: "power2.out",

//         });

//       }


//       if (colorShiftOnHover) {

//         const overlay =
//           e.currentTarget.querySelector(
//             ".color-overlay"
//           );


//         if (overlay) {

//           gsap.to(overlay, {

//             opacity: 0,

//             duration: 0.3,

//           });

//         }
//       }
//     };


//   /* =========================================
//      RENDER
//   ========================================= */

//   return (

//     <div
//       ref={containerRef}
//       className="list"
//       style={{
//         height: `${gridHeight}px`,
//       }}
//     >

//       {grid.map((item) => (

//         <div
//           key={item.id}
//           data-key={item.id}
//           className="item-wrapper"

//           onClick={() =>
//             window.open(
//               item.url,
//               "_blank",
//               "noopener,noreferrer"
//             )
//           }

//           onMouseEnter={(e) =>
//             handleMouseEnter(e, item)
//           }

//           onMouseLeave={(e) =>
//             handleMouseLeave(e, item)
//           }
//         >

//           <div
//             className="item-img"
//             style={{
//               backgroundImage:
//                 `url(${item.img})`,
//             }}
//           >

//             {colorShiftOnHover && (

//               <div
//                 className="color-overlay"
//               />

//             )}

//           </div>

//         </div>

//       ))}

//     </div>
//   );
// };


// export default MasonryGallery;

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

import "./MasonryGallery.css";


/* =========================================================
   GOOGLE DRIVE IMAGE URL
========================================================= */

const getDriveImageUrl = (url) => {
  if (!url) return "";

  // If it is already a normal/direct image URL
  if (!url.includes("drive.google.com")) {
    return url;
  }

  let fileId = null;

  /*
    Format:
    https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  */

  const fileMatch = url.match(
    /\/file\/d\/([^/]+)/
  );

  if (fileMatch) {
    fileId = fileMatch[1];
  }


  /*
    Format:
    https://drive.google.com/open?id=FILE_ID
  */

  const openMatch = url.match(
    /[?&]id=([^&]+)/
  );

  if (!fileId && openMatch) {
    fileId = openMatch[1];
  }


  /*
    Format:
    https://drive.google.com/uc?id=FILE_ID
  */

  const ucMatch = url.match(
    /\/uc\?.*id=([^&]+)/
  );

  if (!fileId && ucMatch) {
    fileId = ucMatch[1];
  }


  /*
    If we couldn't find the ID
  */

  if (!fileId) {
    console.warn(
      "Could not extract Google Drive file ID:",
      url
    );

    return url;
  }


  /*
    Google Drive thumbnail endpoint

    w2000 = large image
  */

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
};


/* =========================================================
   RESPONSIVE COLUMNS
========================================================= */

const useMedia = (
  queries,
  values,
  defaultValue
) => {

  const get = () => {

    if (typeof window === "undefined") {
      return defaultValue;
    }

    const index = queries.findIndex(
      (query) =>
        window.matchMedia(query).matches
    );

    return values[index] ?? defaultValue;
  };


  const [value, setValue] = useState(get);


  useEffect(() => {

    const mediaQueries =
      queries.map((query) =>
        window.matchMedia(query)
      );


    const handler = () => {
      setValue(get());
    };


    mediaQueries.forEach(
      (mediaQuery) => {

        mediaQuery.addEventListener(
          "change",
          handler
        );

      }
    );


    return () => {

      mediaQueries.forEach(
        (mediaQuery) => {

          mediaQuery.removeEventListener(
            "change",
            handler
          );

        }
      );

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);


  return value;
};


/* =========================================================
   MEASURE CONTAINER
========================================================= */

const useMeasure = () => {

  const ref = useRef(null);


  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });


  useLayoutEffect(() => {

    if (!ref.current) {
      return;
    }


    const resizeObserver =
      new ResizeObserver(
        ([entry]) => {

          const {
            width,
            height,
          } = entry.contentRect;


          setSize({
            width,
            height,
          });

        }
      );


    resizeObserver.observe(
      ref.current
    );


    return () => {
      resizeObserver.disconnect();
    };

  }, []);


  return [ref, size];
};


/* =========================================================
   PRELOAD IMAGES
========================================================= */

const preloadImages = async (urls) => {

  await Promise.all(

    urls.map(
      (src) =>

        new Promise((resolve) => {

          const img = new Image();


          /*
            Convert Google Drive URL
            before loading
          */

          img.src =
            getDriveImageUrl(src);


          img.onload = resolve;

          img.onerror = resolve;

        })
    )

  );

};


/* =========================================================
   MASONRY GALLERY
========================================================= */

const MasonryGallery = ({

  items,

  ease = "power3.out",

  duration = 0.6,

  stagger = 0.05,

  animateFrom = "bottom",

  scaleOnHover = true,

  hoverScale = 0.95,

  blurToFocus = true,

  colorShiftOnHover = false,

}) => {


  /* =======================================================
     RESPONSIVE COLUMNS
  ======================================================= */

  const columns = useMedia(

    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],

    [
      5,
      4,
      3,
      2,
    ],

    1

  );


  /* =======================================================
     CONTAINER
  ======================================================= */

  const [
    containerRef,
    { width },
  ] = useMeasure();


  const [
    imagesReady,
    setImagesReady,
  ] = useState(false);


  /* =======================================================
     GAP
  ======================================================= */

  const GAP = 15;


  /* =======================================================
     PRELOAD
  ======================================================= */

  useEffect(() => {

    setImagesReady(false);


    if (!items || !items.length) {
      return;
    }


    preloadImages(
      items.map(
        (item) => item.img
      )
    )
      .then(() => {

        setImagesReady(true);

      });


  }, [items]);


  /* =======================================================
     CREATE MASONRY GRID
  ======================================================= */

  const grid = useMemo(() => {

    if (
      !width ||
      !items ||
      !items.length
    ) {

      return [];

    }


    const colHeights =
      new Array(columns).fill(0);


    /*
      Calculate column width

      Example:

      3 columns

      | image | 15px | image | 15px | image |
    */

    const columnWidth =
      (
        width -
        GAP * (columns - 1)
      ) / columns;


    return items.map(
      (child) => {


        /*
          Find shortest column
        */

        const col =
          colHeights.indexOf(
            Math.min(
              ...colHeights
            )
          );


        /*
          X position
        */

        const x =
          (
            columnWidth +
            GAP
          ) * col;


        /*
          Image height

          Your original
          component uses:

          child.height / 2
        */

        const height =
          child.height / 2;


        /*
          Y position
        */

        const y =
          colHeights[col];


        /*
          Update column height
        */

        colHeights[col] +=
          height + GAP;


        return {

          ...child,

          x,

          y,

          w: columnWidth,

          h: height,

        };

      }
    );

  }, [
    columns,
    items,
    width,
  ]);


  /* =======================================================
     TOTAL GRID HEIGHT
  ======================================================= */

  const gridHeight =
    useMemo(() => {

      if (!grid.length) {
        return 0;
      }


      return Math.max(
        ...grid.map(
          (item) =>
            item.y + item.h
        )
      );

    }, [grid]);


  /* =======================================================
     INITIAL POSITION
  ======================================================= */

  const getInitialPosition =
    (item) => {

      const containerRect =
        containerRef.current
          ?.getBoundingClientRect();


      if (!containerRect) {

        return {
          x: item.x,
          y: item.y,
        };

      }


      let direction =
        animateFrom;


      /*
        Random direction
      */

      if (
        animateFrom ===
        "random"
      ) {

        const directions = [
          "top",
          "bottom",
          "left",
          "right",
        ];


        direction =
          directions[
            Math.floor(
              Math.random() *
                directions.length
            )
          ];

      }


      switch (direction) {


        case "top":

          return {

            x: item.x,

            y: -300,

          };


        case "bottom":

          return {

            x: item.x,

            y:
              window.innerHeight +
              300,

          };


        case "left":

          return {

            x: -300,

            y: item.y,

          };


        case "right":

          return {

            x:
              window.innerWidth +
              300,

            y: item.y,

          };


        case "center":

          return {

            x:
              containerRect.width /
                2 -
              item.w / 2,

            y:
              containerRect.height /
                2 -
              item.h / 2,

          };


        default:

          return {

            x: item.x,

            y:
              item.y + 100,

          };

      }

    };


  /* =======================================================
     GSAP ANIMATION
  ======================================================= */

  const hasMounted =
    useRef(false);


  useLayoutEffect(() => {

    if (!imagesReady) {
      return;
    }


    grid.forEach(
      (item, index) => {


        const selector =
          `[data-key="${item.id}"]`;


        const animationProps = {

          x: item.x,

          y: item.y,

          width: item.w,

          height: item.h,

        };


        /*
          FIRST LOAD
        */

        if (
          !hasMounted.current
        ) {


          const initialPos =
            getInitialPosition(
              item
            );


          const initialState = {

            opacity: 0,

            x: initialPos.x,

            y: initialPos.y,

            width: item.w,

            height: item.h,

            ...(blurToFocus && {
              filter:
                "blur(10px)",
            }),

          };


          gsap.fromTo(

            selector,

            initialState,

            {

              opacity: 1,

              ...animationProps,

              ...(blurToFocus && {
                filter:
                  "blur(0px)",
              }),

              duration: 0.8,

              ease: "power3.out",

              delay:
                index * stagger,

            }

          );


        } else {


          /*
            RESPONSIVE RESIZE
          */

          gsap.to(

            selector,

            {

              ...animationProps,

              duration,

              ease,

              overwrite: "auto",

            }

          );

        }

      }
    );


    hasMounted.current = true;


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [

    grid,

    imagesReady,

    stagger,

    animateFrom,

    blurToFocus,

    duration,

    ease,

  ]);


  /* =======================================================
     HOVER ENTER
  ======================================================= */

  const handleMouseEnter =
    (e, item) => {

      const selector =
        `[data-key="${item.id}"]`;


      /*
        Scale
      */

      if (scaleOnHover) {

        gsap.to(
          selector,
          {

            scale: hoverScale,

            duration: 0.3,

            ease: "power2.out",

          }
        );

      }


      /*
        Color overlay
      */

      if (
        colorShiftOnHover
      ) {

        const overlay =
          e.currentTarget.querySelector(
            ".color-overlay"
          );


        if (overlay) {

          gsap.to(
            overlay,
            {

              opacity: 0.3,

              duration: 0.3,

            }
          );

        }

      }

    };


  /* =======================================================
     HOVER LEAVE
  ======================================================= */

  const handleMouseLeave =
    (e, item) => {

      const selector =
        `[data-key="${item.id}"]`;


      /*
        Scale reset
      */

      if (scaleOnHover) {

        gsap.to(
          selector,
          {

            scale: 1,

            duration: 0.3,

            ease: "power2.out",

          }
        );

      }


      /*
        Overlay reset
      */

      if (
        colorShiftOnHover
      ) {

        const overlay =
          e.currentTarget.querySelector(
            ".color-overlay"
          );


        if (overlay) {

          gsap.to(
            overlay,
            {

              opacity: 0,

              duration: 0.3,

            }
          );

        }

      }

    };


  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (
    !items ||
    !items.length
  ) {

    return (

      <div className="masonry-empty">

        No images found.

      </div>

    );

  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <div
      ref={containerRef}

      className="list"

      style={{
        height: `${gridHeight}px`,
      }}
    >

      {grid.map(
        (item) => (

          <div
            key={item.id}

            data-key={item.id}

            className="item-wrapper"


            /*
              Open original
              Google Drive file
            */

            onClick={() => {

              if (!item.url) {
                return;
              }


              window.open(
                item.url,
                "_blank",
                "noopener,noreferrer"
              );

            }}


            onMouseEnter={(e) =>
              handleMouseEnter(
                e,
                item
              )
            }


            onMouseLeave={(e) =>
              handleMouseLeave(
                e,
                item
              )
            }

          >

            <div

              className="item-img"

              style={{

                backgroundImage:
                  `url("${getDriveImageUrl(
                    item.img
                  )}")`,

              }}

            >

              {colorShiftOnHover && (

                <div
                  className="color-overlay"
                />

              )}

            </div>

          </div>

        )
      )}

    </div>

  );

};


export default MasonryGallery;
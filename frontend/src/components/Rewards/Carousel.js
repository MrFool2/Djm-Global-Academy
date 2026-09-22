import React, {
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import useEmblaCarousel from "embla-carousel-react";

import "./Carousel.css";

/* =========================================
   CLASS NAME HELPER
========================================= */

const cx = (...classes) => {
  return classes
    .filter(Boolean)
    .join(" ");
};


/* =========================================
   CAROUSEL CONTEXT
========================================= */

export const CarouselContext = createContext(null);


/* =========================================
   USE CAROUSEL
========================================= */

export const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "The `useCarousel` hook must be used within a <Carousel />"
    );
  }

  return context;
};


/* =========================================
   CAROUSEL ROOT
========================================= */

const CarouselRoot = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) => {

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis:
        orientation === "horizontal"
          ? "x"
          : "y",
    },
    plugins
  );


  const [canScrollPrev, setCanScrollPrev] =
    useState(false);

  const [canScrollNext, setCanScrollNext] =
    useState(false);

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [scrollSnaps, setScrollSnaps] =
    useState([]);


  /* -----------------------------------------
     INIT
  ----------------------------------------- */

  const onInit = useCallback((emblaApi) => {

    if (!emblaApi) return;

    setScrollSnaps(
      emblaApi.scrollSnapList()
    );

  }, []);


  /* -----------------------------------------
     SELECT
  ----------------------------------------- */

  const onSelect = useCallback((emblaApi) => {

    if (!emblaApi) return;

    setCanScrollPrev(
      emblaApi.canScrollPrev()
    );

    setCanScrollNext(
      emblaApi.canScrollNext()
    );

    setSelectedIndex(
      emblaApi.selectedScrollSnap()
    );

  }, []);


  /* -----------------------------------------
     PREVIOUS
  ----------------------------------------- */

  const scrollPrev = useCallback(() => {

    api?.scrollPrev();

  }, [api]);


  /* -----------------------------------------
     NEXT
  ----------------------------------------- */

  const scrollNext = useCallback(() => {

    api?.scrollNext();

  }, [api]);


  /* -----------------------------------------
     KEYBOARD
  ----------------------------------------- */

  const handleKeyDown = useCallback(
    (event) => {

      if (event.key === "ArrowLeft") {

        event.preventDefault();

        scrollPrev();

      } else if (event.key === "ArrowRight") {

        event.preventDefault();

        scrollNext();

      }

    },
    [scrollPrev, scrollNext]
  );


  /* -----------------------------------------
     SET API
  ----------------------------------------- */

  useEffect(() => {

    if (!api || !setApi) return;

    setApi(api);

  }, [api, setApi]);


  /* -----------------------------------------
     EMBLA EVENTS
  ----------------------------------------- */

  useEffect(() => {

    if (!api) return;


    onInit(api);

    onSelect(api);


    api.on("reInit", onInit);

    api.on("reInit", onSelect);

    api.on("select", onSelect);


    return () => {

      api.off("reInit", onInit);

      api.off("reInit", onSelect);

      api.off("select", onSelect);

    };

  }, [api, onInit, onSelect]);


  /* -----------------------------------------
     RENDER
  ----------------------------------------- */

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,

        opts,

        orientation:
          orientation ||
          (opts?.axis === "y"
            ? "vertical"
            : "horizontal"),

        scrollPrev,
        scrollNext,

        canScrollPrev,
        canScrollNext,

        selectedIndex,

        scrollSnaps,
      }}
    >

      <div
        onKeyDownCapture={handleKeyDown}
        className={cx(
          "carousel-root",
          className
        )}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >

        {children}

      </div>

    </CarouselContext.Provider>
  );
};


/* =========================================
   CAROUSEL CONTENT
========================================= */

const CarouselContent = ({
  className,
  overflowHidden = true,
  ...props
}) => {

  const {
    carouselRef,
    orientation,
  } = useCarousel();


  return (

    <div
      ref={carouselRef}
      className={cx(
        "carousel-viewport",

        overflowHidden &&
          "carousel-overflow-hidden"
      )}
    >

      <div
        className={cx(
          "carousel-container",

          orientation === "vertical" &&
            "carousel-container-vertical",

          className
        )}
        {...props}
      />

    </div>
  );
};


/* =========================================
   CAROUSEL ITEM
========================================= */

const CarouselItem = ({
  className,
  ...props
}) => {

  return (

    <div
      role="group"
      aria-roledescription="slide"
      className={cx(
        "carousel-item",
        className
      )}
      {...props}
    />

  );
};


/* =========================================
   TRIGGER
========================================= */

const Trigger = ({
  className,
  children,
  asChild,
  direction,
  style,
  ...props
}) => {

  const {
    scrollPrev,
    canScrollNext,
    scrollNext,
    canScrollPrev,
  } = useCarousel();


  const isDisabled =
    direction === "prev"
      ? !canScrollPrev
      : !canScrollNext;


  const handleClick = () => {

    if (isDisabled) return;


    if (direction === "prev") {
      scrollPrev();
    } else {
      scrollNext();
    }

  };


  const computedClassName =
    typeof className === "function"
      ? className({ isDisabled })
      : className;


  const defaultAriaLabel =
    direction === "prev"
      ? "Previous slide"
      : "Next slide";


  /* -----------------------------------------
     RENDER PROP
  ----------------------------------------- */

  if (typeof children === "function") {

    return (
      <>
        {children({
          isDisabled,
          onClick: handleClick,
        })}
      </>
    );

  }


  /* -----------------------------------------
     AS CHILD
  ----------------------------------------- */

  if (
    asChild &&
    isValidElement(children)
  ) {

    return cloneElement(children, {

      onClick: handleClick,

      disabled: isDisabled,

      "aria-label":
        defaultAriaLabel,

      style: {
        ...children.props.style,
        ...style,
      },

      className: [
        computedClassName,
        children.props.className,
      ]
        .filter(Boolean)
        .join(" ") || undefined,

    });

  }


  /* -----------------------------------------
     DEFAULT BUTTON
  ----------------------------------------- */

  return (

    <button
      aria-label={defaultAriaLabel}
      disabled={isDisabled}
      className={computedClassName}
      onClick={handleClick}
      style={style}
      {...props}
    >

      {children}

    </button>

  );
};


/* =========================================
   PREVIOUS TRIGGER
========================================= */

const CarouselPrevTrigger = (
  props
) => {

  return (
    <Trigger
      {...props}
      direction="prev"
    />
  );

};


/* =========================================
   NEXT TRIGGER
========================================= */

const CarouselNextTrigger = (
  props
) => {

  return (
    <Trigger
      {...props}
      direction="next"
    />
  );

};


/* =========================================
   INDICATOR
========================================= */

const CarouselIndicator = ({
  index,
  isSelected = false,
  children,
  asChild,
  className,
  style,
}) => {

  const {
    api,
    selectedIndex,
  } = useCarousel();


  isSelected =
    isSelected ||
    selectedIndex === index;


  const handleClick = () => {

    api?.scrollTo(index);

  };


  const computedClassName =
    typeof className === "function"
      ? className({ isSelected })
      : className;


  const defaultAriaLabel =
    "Go to slide " + (index + 1);


  /* -----------------------------------------
     RENDER PROP
  ----------------------------------------- */

  if (typeof children === "function") {

    return (
      <>
        {children({
          isSelected,
          onClick: handleClick,
        })}
      </>
    );

  }


  /* -----------------------------------------
     AS CHILD
  ----------------------------------------- */

  if (
    asChild &&
    isValidElement(children)
  ) {

    return cloneElement(children, {

      onClick: handleClick,

      "aria-label":
        defaultAriaLabel,

      "aria-current":
        isSelected
          ? "true"
          : undefined,

      style: {
        ...children.props.style,
        ...style,
      },

      className: [
        computedClassName,
        children.props.className,
      ]
        .filter(Boolean)
        .join(" ") || undefined,

    });

  }


  /* -----------------------------------------
     DEFAULT BUTTON
  ----------------------------------------- */

  return (

    <button
      aria-label={defaultAriaLabel}
      aria-current={
        isSelected
          ? "true"
          : undefined
      }
      className={computedClassName}
      onClick={handleClick}
      style={style}
    >

      {children}

    </button>

  );
};


/* =========================================
   INDICATOR GROUP
========================================= */

const CarouselIndicatorGroup = ({
  children,
  ...props
}) => {

  const {
    scrollSnaps,
  } = useCarousel();


  /* -----------------------------------------
     RENDER PROP
  ----------------------------------------- */

  if (typeof children === "function") {

    return (

      <nav {...props}>

        {scrollSnaps.map(
          (_, index) => (

            <React.Fragment
              key={index}
            >
              {children({
                index,
              })}
            </React.Fragment>

          )
        )}

      </nav>

    );

  }


  return (
    <nav {...props}>
      {children}
    </nav>
  );

};


/* =========================================
   CAROUSEL API
========================================= */

export const Carousel = {

  Root: CarouselRoot,

  Content: CarouselContent,

  Item: CarouselItem,

  PrevTrigger:
    CarouselPrevTrigger,

  NextTrigger:
    CarouselNextTrigger,

  IndicatorGroup:
    CarouselIndicatorGroup,

  Indicator:
    CarouselIndicator,

};

export default Carousel;
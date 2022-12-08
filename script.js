const boxes = document.querySelectorAll(".box-container");

const createTooltipInfo = function (e) {
  const tooltipBox = e.target;
  const tooltipContent = tooltipBox.dataset.tooltipText;
  const tooltipPosition = tooltipBox.dataset.tooltipPosition;

  const newTooltipInfo = document.createElement("span");
  newTooltipInfo.innerHTML = tooltipContent;
  newTooltipInfo.className = `tooltip-info ${
    tooltipPosition ? tooltipPosition : "top"
  }`;

  tooltipBox.append(newTooltipInfo);
};

const removeTooltipInfo = function (e) {
  const tooltipParent = e.target;
  const tooltipInfo = tooltipParent.querySelector(".tooltip-info");
  if (tooltipInfo) {
    tooltipInfo.remove();
  }
};

boxes.forEach((el) => el.addEventListener("mouseover", createTooltipInfo));
boxes.forEach((el) => el.addEventListener("mouseout", removeTooltipInfo));

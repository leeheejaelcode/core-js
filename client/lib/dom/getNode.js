const getNode = (node, context = document) => {
  if (isString(context)) context = document.querySelector(context);

  // context가 document가 아니라면 querySelector를 돌아줘
  // if (context.nodeType != 9) context = document.querySelector(context);

  return context.querySelector(node);
};

const getNodes = (node, context = document) => {
  // context가 document가 아니라면 querySelector를 돌아줘
  if (context.nodeType != 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
};

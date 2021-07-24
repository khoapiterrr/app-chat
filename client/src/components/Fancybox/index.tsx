import React, { useEffect } from 'react';

// const { NativeFancybox } = require('@fancyapps/ui/dist/fancybox.esm.js');
// import NativeFancybox from 'static/lib/ui@4.0/fancybox.esm.js';

function Fancybox(props: any) {
  // const delegate = props.delegate || '[data-fancybox]';

  // useEffect(() => {
  //   NativeFancybox.assign(delegate, props.options || {});

  //   return () => {
  //     NativeFancybox.trash(delegate);

  //     NativeFancybox.close(true);
  //   };
  // }, []);

  return <>{props.children}</>;
}

export default Fancybox;

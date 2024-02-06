export function NoteCard() {
  return (
    <button className="text-left rounded-md bg-slate-800 p-5 space-y-3 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">há 2 dias</span>
      <p className="text-sm leading-6  text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque
        blanditiis voluptatibus asperiores recusandae harum sunt odio rerum,
        similique iste eius amet rem eum esse expedita, error molestiae
        assumenda quam. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Non, optio hic dolorem consectetur dolor quos odio fuga doloremque
        voluptatem, similique id ratione. Tempora qui laboriosam consequatur
        expedita ea porro impedit. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Aspernatur beatae tenetur, atque nesciunt facilis
        nulla, facere pariatur distinctio assumenda dolore voluptas iusto, eos
        dignissimos saepe obcaecati perspiciatis ratione debitis modi!
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}

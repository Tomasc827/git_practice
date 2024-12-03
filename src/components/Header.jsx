export default function Header() {
  return (
    <>
      <header>
        <nav class=" py-3 px-4 flex items-center justify-between">
          <a class="font-bold text-xl tracking-tight" href="#">
            IMAJI Coffee.
          </a>
          <div class="flex items-center">
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              Home
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              Story
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              Menu
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              Space
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              Community
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              News
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              <button class="bg-transparent hover:bg-yellow-800 text-yellow-800 font-semibold hover:text-white py-2 px-4 border border-yellow-800 hover:border-transparent rounded">
                Button
              </button>
            </a>
            <a class="text-sm px-4 py-2 leading-none rounded-full" href="#">
              <button class="bg-transparent hover:bg-yellow-800 text-yellow-800 font-semibold hover:text-white py-2 px-4 border border-yellow-800 hover:border-transparent rounded">
                Button
              </button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

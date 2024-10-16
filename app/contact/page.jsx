import React from "react";

export default function Contact() {
  return (
    <section className="container mx-auto h-dvh max-w-[1280px] px-8 py-24 md:px-16 md:pt-28">
      <div className="flex flex-col-reverse justify-center gap-y-10 lg:flex-row-reverse lg:gap-x-16">
        <div className="flex flex-col gap-y-8 p-6 sm:p-8 md:p-10 lg:w-[40%]">
          <div className="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 opacity-87 md:w-12 lg:w-14"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M3 12c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H9v3l-3-3zm18 6c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-6v1c0 2.2-1.8 4-4 4v2c0 1.1.9 2 2 2h2v3l3-3z"
              />
            </svg>
            <div className="space-y-2">
              <div>
                <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug">
                  Message us
                </h1>
                <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                  Our friendly team is here to help.
                </p>
              </div>
              <div>
                <p className="text-sm opacity-87 md:text-base lg:text-lg xl:text-xl">
                  spikysprouts@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 opacity-87 md:w-12 lg:w-14"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#ffffff"
                  fillRule="nonzero"
                  d="M6.72 16.64a1 1 0 0 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.4 16.4 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a21 21 0 0 1-1.952-1.282A16 16 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2m0 5.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                />
              </g>
            </svg>
            <div className="space-y-2">
              <div>
                <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug">
                  Visit us
                </h1>
                <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                  Come say hello at our store.
                </p>
              </div>
              <p className="text-sm opacity-87 md:text-base lg:text-lg xl:text-xl">
                Lima - Green City Peru Av. <br /> Plantopia #4321
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 opacity-87 md:w-12 lg:w-14"
            >
              <path
                d="M14.5562 15.5477L14.1007 16.0272C14.1007 16.0272 13.0181 17.167 10.0631 14.0559C7.10812 10.9448 8.1907 9.80507 8.1907 9.80507L8.47752 9.50311C9.18407 8.75924 9.25068 7.56497 8.63424 6.6931L7.37326 4.90961C6.61028 3.8305 5.13596 3.68795 4.26145 4.60864L2.69185 6.26114C2.25823 6.71766 1.96765 7.30945 2.00289 7.96594C2.09304 9.64546 2.81071 13.259 6.81536 17.4752C11.0621 21.9462 15.0468 22.1239 16.6763 21.9631C17.1917 21.9122 17.6399 21.6343 18.0011 21.254L19.4217 19.7584C20.3806 18.7489 20.1102 17.0182 18.8833 16.312L16.9728 15.2123C16.1672 14.7486 15.1858 14.8848 14.5562 15.5477Z"
                fill="white"
              />
              <path
                d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z"
                fill="white"
              />
            </svg>

            <div className="space-y-2">
              <div>
                <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug">
                  Call us
                </h1>
                <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
                  Mon-Fri from 8am to 5pm.
                </p>
              </div>
              <p className="text-sm opacity-87 md:text-base lg:text-lg xl:text-xl">
                +00-987-654-321
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 rounded-3xl bg-button/10 p-6 sm:p-8 md:p-10 lg:w-[60%]">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-morangaBlack text-xl uppercase opacity-87 md:text-[1.6rem] md:leading-snug lg:text-[2.488rem] xl:text-[2.986rem]">
              We're Here to Help
            </h1>
            {/* md:w-[34rem] lg:w-[38rem] xl:w-[40rem] */}
            <p className="text-sm opacity-60 md:text-base lg:text-lg xl:text-xl">
              Got questions about your order, products, or anything else? Fill
              out the form below or reach out via phone or email, and we'll get
              back to you as soon as possible.
            </p>
          </div>

          <form action="">
            <div className="flex flex-auto flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="block flex-1 rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 py-2.5 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="search"
                  name="search"
                  inputMode="name"
                  placeholder="Fullname"
                  required
                />
                <input
                  className="block flex-1 rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 py-2.5 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                  type="text"
                  id="search"
                  name="search"
                  inputMode="email"
                  placeholder="Email address"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>

              <textarea
                rows="5"
                className="block resize-none rounded-lg border-2 border-white/[0.05] bg-white/[0.02] px-4 py-2.5 text-sm font-medium placeholder-white/[.38] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-button md:text-base lg:text-lg xl:text-xl"
                type="text"
                id="search"
                name="search"
                inputMode="email"
                placeholder="Type your message here"
                required
              />
            </div>
          </form>

          <button className="font-basementGrotesque rounded-md bg-button px-4 py-2.5 text-sm font-bold hover:bg-hover md:text-base lg:text-lg xl:px-8 xl:text-xl">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react'

export default function App(){
  return (
    <div className="p-4 mb-2">
      <h1 className="font-bold  text-lg text-blue-400">hover</h1>
      <br />
      <hr className="border border-blue-600/80"/>
      <br />
      <button className="p-2 bg-pink-400 rounded-lg text-red-800 hover:bg-black hover:text-white hover:scale-50 transition-all"></button>
      <br />
      <br />
      <hr className="border border-blue-600/80"/>
      <h2 className="font-bold text-lg text-blue-400">active</h2>
      <button 
      className="px-8 py-2 rounded-md text-white
      bg-violet-500 hover:bg-violet-600
      active:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400
      "
      >Click</button>

      <hr className='border border-blue-600/80'/>
      <h2 className="font-bold text-lg text-blue-400">active</h2>
      <div className='p-5 first:pt-10 last:pb-10 bg-slate-200 rounded-sm w-64 mx-auto'>
        <div className='h-16 bg-slate-600 first:mt-40 mb-2 text-white text-center text-xl font-bold'>first</div>
        <div className='h-16 bg-slate-400 mb-2'></div>
        <div className='h-16 bg-slate-400 mb-2'></div>
        <div className='h-16 bg-slate-400 mb-2'></div>
        <div className='h-16 bg-slate-400 mb-2'></div>
        <div className='h-16 bg-slate-400 mb-2'></div>
        <div className='h-16 bg-slate-600 first:mt-40 mb-2 text-white text-center text-xl font-bold'>last</div>
      </div>
      <br />
      <br />
      <br />
      <hr className='border border-blue-600/80'/>
      <br />
      <form action="">
        <label htmlFor="e1">email</label>
        <input type="email" name="email" id="e1" 
        className='border-2 border-emerald-500 p-4 ml-4 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-emerald-400 text-emerald-400
        invalid:border-red-500 invalid:text-red-400 invalid:focus:ring-red-400
        '
         />
      </form>
      
        {/* <div>
          <button className='p-2 bg-orange-600 rounded-lg text-white hover:bg-lime-500 hover:scale-150 transition-all'>Hover</button>
          <button className='p-2 bg-orange-600 rounded-lg text-white active:bg-lime-400 transition-all'>Click</button> 
        </div> */}
        <form>
          {/*  disabled ნიშნავს რომ ჩაკეტილია და მომხმარებელს არ შეუძლია გამოყენება */}
    <label className="block">
      <span className="block text-sm font-medium text-slate-700">Username</span>
      <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "/>
    </label>
  </form>
    <a href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
    <div className="flex items-center space-x-3">
      <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
      <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
    </div>
    <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
  </a>
    <div className="group is-published">
    <div className="hidden group-[.is-published]:block group-[.is-published]:text-orange-600">
      Published
    </div>
  </div>
      <div className="group">
        {/* nth-of-type  ეძებს მესამე მესამე ელემენტს & კიდე ეძებს სხვა მაგალითებს */}
        <div className="group-[:nth-of-type(3)_&]:block">
          hiii
        </div>
      </div>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" className="peer ..."/>
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
      </form>
      <fieldset>
        <legend>Published status</legend>

        <input id="draft" className="peer/draft" type="radio" name="status" checked />
        <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>

        <input id="published" className="peer/published" type="radio" name="status" />
        <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>
        {/* როდესაც მომხმარებელი დაკლიკავს ამ რადიოს შედეგს გამოაჩენს საითზე თუ სხვას მაშინ სხვა შედეგს გამოიყვანს საითზე */}
        <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
        {/* როდესაც მომხმარებელი დაკლიკავს ამ რადიოს შედეგს გამოაჩენს საითზე თუ სხვას მაშინ სხვა შედეგს გამოიყვანს საითზე */}
        <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
      </fieldset>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" className="is-dirty peer" required /><br />
        <input type="submit" placeholder='click' className='bg-orange-600 text-white active:text-green-500 focus:ring-lime-500 focus:ring-2 rounded-lg w-[100px] h-9 cursor-pointer'/>
        <div className="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
      </form>
      {/* <div>
        <input type="text" className="peer" />
        <div className="hidden peer-[:nth-of-type(3)_&]:block">
        </div>
      </div>      */}

        <label className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
          <svg fill="currentColor">
          </svg>
          Google Pay
          <input type="radio" className="checked:border-indigo-500"  id='first' name='1'/><br />
        </label>
        {/* <div className="group ...">
          <img src="..." />
          <h4>Spencer Sharp</h4>
          <svg className="hidden group-has-[a]:block ...">
          </svg>
          <p>Product Designer at <a href="...">planeteria.tech</a></p>
        </div> */}
        {/* <fieldset>
          <legend>Today</legend>

          <div>
            <label className="peer ...">
              <input type="checkbox" name="todo[1]" checked />
              Create a to do list
            </label>
            <label className="peer ...">
              <input type="checkbox" name="todo[1]" />
              Check Off
            </label>
            <svg className="peer-has-[:checked]:hidden ...">
            </svg>
          </div>
        </fieldset> */}
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
        </label>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
        {/* <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-orange-300" viewBox="0 0 20 20"></svg>
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label> */}
        {/* <form className="flex items-center space-x-6">
            <div className="shrink-0">
              <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input type="file" className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
              "/>
            </label>
          </form> */}
          {/*                         აძლევს ფერს სიის პუნქტს */}
        {/* <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul> */}
        {/*  როდესაც მონიშნავ მაშინ ფერი ეცვლება */}
        {/* <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
          <p>
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine intervention
            or the kinship of all living things but I tell you Jerry at that moment,
            I <em>was</em> a marine biologist.
          </p>
        </div> */}
        {/* პირველ ხაზს მისცემს ყველა ასოს დიდს და ასოებს შორის გაუზრდის სივრცეს */}
        {/* <p className="first-line:uppercase first-line:tracking-widest
          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left
        ">
          Well, let me tell you something, funny boy. Y'know that little stamp, the one
          that says "New York Public Library"? Well that may not mean anything to you,
          but that means a lot to me. One whole hell of a lot.
        </p> */}
    </div>
    
  )
}

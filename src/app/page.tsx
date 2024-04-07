"use client";

import Image from "next/image";
import { Tweet } from "react-tweet";

export default function Home() {
  const stats = [
    { id: 2, name: 'Monthly Retweets', value: '25,000' },
    { id: 1, name: 'Monthly Google Searches', value: '34,600,000' },
    { id: 3, name: 'Daily Tweets', value: '200' },
  ]

  return (
    <div className="relative px-2 md:px-10 mx-auto bg-gray-50/50">
      <div className="relative py-8 px-10">

        <div className="px-8 lg:px-0 prose prose-a:text-sky-500">
          <Image
              src="/logo.png"
              alt="Gamertag's Logo"
              width={350}
              height={197}
              priority={true}
              className="mb-6 block w-72 max-w-full"
          />

          <h1 className="font-bold">
            Gamertag.com is one of the <span className="underline">Most Iconic Gaming Domains</span>
          </h1>
          <p>
            A "gamertag" is more than just a username. It's a badge of honor, a digital persona that defines who you are
            in the gaming world. And now, you have the opportunity to own one of the most sought after gaming domaims:
            Gamertag.com.
          </p>

          <h2>Why Gamertag.com?</h2>
          <ul>
            <li><strong>Brand Recognition</strong>: From Xbox to Razer, the term "gamertag" is synonymous with gaming
              excellence. Own the
              brand that speaks to millions.
            </li>
            <li><strong>Market Demand</strong>: With over 34,600,000 monthly searches, the demand for gamertags is
              skyrocketing. Don't
              miss out on this lucrative opportunity.
            </li>
            <li><strong>Social Proof</strong>: See what top gamers and influencers are saying about gamertags. Dive into
              our collection
              of tweets from industry leaders who recognize the value of this premium domain.
            </li>
            <li><strong>SquadHelp Approved</strong>: This domain has a rating of 9.9 out of 10 on <a
                href="https://www.squadhelp.com/domain-insights/Gamertag.com#domainresults">SquadHelp Domain
              Insights</a> due to it being a short, aged domain (21 years old) that is registered in many tlds.
            </li>
          </ul>

          <h2>Example Keywords Searched</h2>
          <ul>
            <li><strong>"gamertag generator"</strong>: Searched over 22,200 times per month.</li>
            <li><strong>"xbox gamertag"</strong>: Searched over 6,600 times per month.</li>
            <li><strong>"change xbox gamertag"</strong>: Searched over 5,400 times per month.</li>
            <li><strong>"funny gamertags"</strong>: Searched over 5,400 times per month.</li>
            <li><strong>"gamertag ideas"</strong>: Searched over 5,400 times per month.</li>
          </ul>
        </div>

        <div className="py-24 sm:py-32">
          <div className="not-prose">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="px-8 lg:px-0 prose">
          <h2>Actively Used Daily by Industry Leaders</h2>
        </div>

        <div className="grid max-w-none sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-0">
          <Tweet id="1699459981651976678"/>
          <Tweet id="1550964414764896256"/>
          <Tweet id="1766141983536329015"/>
          <Tweet id="1768683579507192246"/>
          <Tweet id="1775093475211358495"/>
          <Tweet id="1774794367414182314"/>
          <Tweet id="1133821986617085952"/>
          <Tweet id="967206188797509632"/>
          <Tweet id="1746653757637554197"/>
          <Tweet id="1768277641323250111"/>
          <Tweet id="1769453771627671646"/>
          <Tweet id="1773669427805921442"/>
        </div>

        <div className="px-8 lg:px-0 prose">
          <h2>Your Gateway to Gaming Greatness</h2>
          <p>Don't settle for a mediocre online identity. Claim your spot at the forefront of gaming culture with
            Gamertag.com. Take the first step towards dominance in the digital arena.</p>

          <h2>Seize the Moment. Own the Name.</h2>
          <p>Unlock the potential of Gamertag.com today.</p>

          <p>This domain is in no way associated with Xbox or Microsoft.</p>

          <div className="flex items-center my-3 lg:my-5 flex-col md:flex-row">
            <a
                href="https://dan.com/buy-domain/gamertag.com"
                className="rounded-full border-2 not-prose text-black text-sm tracking-widest uppercase font-bold inline-flex items-center py-3 m-2 px-6 transition-all ease-in-out duration-200 hover:shadow-lg hover:bg-gray-50"
            >
              <span>Make an Offer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

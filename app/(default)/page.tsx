import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import {Tweet} from "react-tweet";

export default function Home() {
  const desc = 'A "gamertag" is more than just a username. It\'s a badge of honor, a digital persona that defines who you are in the gaming world. And now, you have the opportunity to own one of the most sought after gaming domains: Gamertag.com.';
  return (
    <section>
      <div className="pt-24 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <img className="w-72 lg:w-96 mb-5 mx-auto" src="/img/logo.png" alt=""/>
          <PageHeader
              className="mb-12"
              title="Gamertag is one of the Most Iconic Gaming Domains"
              description={desc}
          >
            Gamertag.com <span className="text-gray-300 mx-1">·</span> Domain For Sale
          </PageHeader>

          <SubscribeForm/>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-2 font-bold">Why Gamertag.com?</h2>
            <ul className="list-disc ml-8 mb-12 text-lg">
              <li><strong>Brand Recognition</strong>: From Xbox to Razer, the term "gamertag" is synonymous with gaming
                excellence. Own the
                brand that speaks to millions.
              </li>
              <li><strong>Market Demand</strong>: With over 34,600,000 monthly searches, the demand for gamertags is
                skyrocketing. Don't
                miss out on this lucrative opportunity.
              </li>
              <li><strong>Social Proof</strong>: See what top gamers and influencers are saying about gamertags. Dive
                into
                our collection
                of tweets from industry leaders who recognize the value of this premium domain.
              </li>
              <li><strong>SquadHelp Approved</strong>: This domain has a rating of 9.9 out of 10 on <a
                  href="https://www.squadhelp.com/domain-insights/Gamertag.com#domainresults">SquadHelp Domain
                Insights</a> due to it being a short, aged domain (21 years old) that is registered in many tlds.
              </li>
            </ul>

            <h2 className="text-3xl mb-2 font-bold">Example Keywords Searched</h2>
            <ul className="list-disc ml-8 mb-12 text-lg">
              <li><strong>"gamertag generator"</strong>: Searched over 22,200 times per month.</li>
              <li><strong>"xbox gamertag"</strong>: Searched over 6,600 times per month.</li>
              <li><strong>"change xbox gamertag"</strong>: Searched over 5,400 times per month.</li>
              <li><strong>"funny gamertags"</strong>: Searched over 5,400 times per month.</li>
              <li><strong>"gamertag ideas"</strong>: Searched over 5,400 times per month.</li>
            </ul>

            <div className="grid max-w-none sm:grid-cols-2 gap-8 gap-y-0 mb-12">
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
              <h2 className="text-3xl mb-2 font-bold">Your Gateway to Gaming Greatness</h2>
              <p className="text-white text-lg mb-12">Don't settle for a mediocre online identity. Claim your spot at the forefront of gaming culture with
                Gamertag.com. Take the first step towards dominance in the digital arena.</p>

              <h2 className="text-3xl mb-2 font-bold">Seize the Moment. Own the Name.</h2>
              <p className="text-white text-lg mb-12">Unlock the potential of Gamertag.com today.</p>

              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

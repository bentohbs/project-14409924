import { contacts } from '@/mocks/home';

export default function CtaFooter() {
  return (
    <>
      <section className="relative py-16 md:py-20 px-4 md:px-10 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20soft%20flowing%20light%20grey%20wave%20lines%20on%20a%20pale%20off-white%20background%2C%20elegant%20minimal%20texture%2C%20subtle%20gradient%2C%20airy%20and%20clean%20corporate%20backdrop&width=1920&height=600&seq=cta-hands-01&orientation=landscape"
          alt="Global partnerships background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="relative text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground-950">Trusted by regulators, labs and partners worldwide</h2>
          <p className="text-sm text-foreground-700 mt-3 max-w-xl mx-auto">We keep your certification process trackable and your business ahead of every regulatory movement.</p>
          <a href="#contact" className="inline-block mt-7 px-7 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 text-sm whitespace-nowrap cursor-pointer">See the full list of supported countries</a>
        </div>
      </section>
      <footer id="contact" className="bg-primary-50 px-4 md:px-10 pt-14 pb-6">
        <h2 className="font-heading text-xl md:text-2xl text-foreground-950 text-center">Contact for Support</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {contacts.map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center">
              <span className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50 text-primary-500"><i className={`${c.icon} text-2xl`} /></span>
              <p className="text-xs text-foreground-600 mt-3">{c.label}</p>
              <p className="text-sm text-foreground-950 font-medium mt-1">{c.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-5 border-t border-primary-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground-600">
          <span>© 2026 GaudiEnt Global Compliance. All rights reserved.</span>
          <span>Type Approval · Regulatory Compliance · Certification</span>
        </div>
      </footer>
    </>
  );
}
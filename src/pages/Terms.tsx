import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 2024
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Durion Base's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, you should not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Durion Base provides IT consulting, blockchain development, security auditing, and related 
                technology services. We reserve the right to modify, suspend, or discontinue any aspect of 
                our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Providing accurate and complete information</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Maintaining the confidentiality of any access credentials</li>
                <li>Timely payment of all fees and charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All intellectual property rights in our services, including but not limited to software, 
                documentation, and methodologies, remain the property of Durion Base unless otherwise agreed 
                in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Durion Base shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising from or related to your use 
                of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:{" "}
                <a href="mailto:Durionbase@proton.me" className="text-primary hover:underline">
                  Durionbase@proton.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
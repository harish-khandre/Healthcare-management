import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Guidelines() {
  return (
    <div>
      <div className="flex border-2 h-full w-full py-4 px-8 gap-4">
        <div className="data-section bg-gray-50 w-full lg:w-[70%] h-full border-2 border-gray-200 rounded-2xl">
          <div className="lg:h-[27rem]">
            <img
              className="aspect-video rounded-2xl w-full h-full"
              src="/hippa.png"
              alt="hippa"
            />
          </div>
          <div className="h-full lg:p-8 bg-gray-50">
            <h1 className="text-2xl font-bold p-3">The HIPPA Guidelines</h1>
            <hr />
            <section className="p-3">
              <p className="text-lg">
                The Security Rule requires covered entities to maintain
                reasonable and appropriate administrative, technical, and
                physical safeguards for protecting e-PHI. Specifically, covered
                entities must:
              </p>
              <br />
              <ol className="list-decimal list-inside">
                <li>
                  Ensure the confidentiality, integrity, and availability of all
                  e-PHI they create, receive, maintain or transmit
                </li>
                <li>
                  Identify and protect against reasonably anticipated threats to
                  the security or integrity of the information
                </li>
                <li>
                  Protect against reasonably anticipated, impermissible uses or
                  disclosures
                </li>
                <li>Ensure compliance by their workforce.</li>
              </ol>
              <br />
              <p>
                The Security Rule defines "confidentiality" to mean that e-PHI
                is not available or disclosed to unauthorized persons. The
                Security Rule's confidentiality requirements support the Privacy
                Rule's prohibitions against improper uses and disclosures of
                PHI. The Security rule also promotes the two additional goals of
                maintaining the integrity and availability of e-PHI. Under the
                Security Rule, "integrity" means that e-PHI is not altered or
                destroyed in an unauthorized manner. "Availability" means that
                e-PHI is accessible and usable on demand by an authorized
                person.
              </p>
              <br />
              <p>
                HHS recognizes that covered entities range from the smallest
                provider to the largest, multi-state health plan. Therefore the
                Security Rule is flexible and scalable to allow covered entities
                to analyze their own needs and implement solutions appropriate
                for their specific environments. What is appropriate for a
                particular covered entity will depend on the nature of the
                covered entity's business, as well as the covered entity's size
                and resources.
              </p>
              <br />
              <p>
                Therefore, when a covered entity is deciding which security
                measures to use, the Rule does not dictate those measures but
                requires the covered entity to consider:
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li>Its size, complexity, and capabilities</li>
                <li>Its technical, hardware, and software infrastructure</li>
                <li>The costs of security measures</li>
                <li>
                  The likelihood and possible impact of potential risks to
                  e-PHI.6
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>About HIPPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The Health Insurance Portability and Accountability Act of
                  1996 (HIPAA) is a federal law that required the creation of
                  national standards to protect sensitive patient health
                  information from being disclosed without the patient's consent
                  or knowledge.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

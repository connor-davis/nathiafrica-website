import Footer from "../../components/footer/footer";

const ProductsAndServices = () => {
  return (
    <div class="flex flex-col w-full h-full">
      <div class="flex flex-col items-center w-full h-auto">
        <div class="flex flex-col w-full md:w-3/5 h-auto space-y-5 py-5 px-5 md:px-0">
          <div class="flex flex-col w-full space-y-5">
            <div class="text-4xl font-semibold">Products And Services</div>
            <div class="w-16 h-1 bg-brownish"></div>
            <div class="text-md">
              Nathi Africa Just Recycling offers tailor made services that
              uniquely seek to meet each customer segment's needs.
            </div>
          </div>
          <div class="flex flex-col w-full space-y-5">
            <div class="text-md font-semibold">
              We offer the following services within customer segments:-
            </div>
            <ul class="text-md pl-5 list-decimal space-y-3 marker:text-brownish">
              <li>
                Collection of readily prepared recyclables such as glass cullet
                in PP sling bags from Reclaimers across townships and informal
                settlements and deliver directly to the recyclers and the
                packaging manufacturers.
              </li>
              <li>
                Direct location specific collections of various recyclable
                substrates at predetermined dates and times
              </li>
              <li>
                Service Level Agreement (SLA) service to various establishments
                including Hotels, shopping malls, restaurants, taverns /
                shisanyamas and shebeens, where recyclable waste is generated
              </li>
              <li>
                Waste area / site management, where we provide a full waste
                management service including placement of waste sorters,
                cleaners, baling, and transport.
              </li>
              <li>
                Buy Back Center (BBC) points of service to local residents. We
                partner with local entrepreneurs and establish BBC in strategic
                positions within their locality to service waste recycling needs
                of each area. This service fits in well with our medium term
                business strategy of empowering many waste reclaimers into fully
                fledged BBC business owners and operators.
              </li>
              <li>
                In partnership with POLYCO, we are introduced a PACKA- CHING
                unit which will service the Ethekwini region thus making waste
                recycling accessible to many who otherwise don't have easy
                access to a BBC.In partnership with POLYCO, we are introduced a
                PACKA- CHING unit which will service the Ethekwini region thus
                making waste recycling accessible to many who otherwise don't
                have easy access to a BBC.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsAndServices;

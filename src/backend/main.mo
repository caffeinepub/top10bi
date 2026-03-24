actor {
  type StoreInfo = {
    name : Text;
    address : Text;
    contactEmail : Text;
    contactPhone : Text;
  };

  public query func getStoreInfo() : async StoreInfo {
    {
      name = "Simple Store";
      address = "123 Main St, IC City";
      contactEmail = "contact@simplestore.com";
      contactPhone = "+1234567890";
    };
  };
};

const Listing = require("../models/listing");
const { populate } = require("../models/review");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    console.log(listing);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
  } catch (error) {
    console.error(error);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("./listings");
};

// try {
// const newListing = new Listing({
// title: req.body.listing.title,
// description: req.body.listing.description,
// image: req.file ? req.file.path : null,
// price: req.body.listing.price,
// country: req.body.listing.country,
// location: req.body.listing.location,
// });
// await newListing.save();
// req.flash("s
// uccess", "wow!, new listing has been created");
// res.redirect(`/listings/${newListing._id}`);
// res.redirect("/listings/new");
// } catch (error) {
// console.error(error);
// req.flash("error", "Failed to create listing");
// res.redirect("/listings/new");
// }
// };

module.exports.renderEditForm = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error ", "listing you  are requesting does not found");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl.replace("/uploads", "/uploads/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let updateListing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await updateListing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing deleted");
  res.redirect("/listings");
};

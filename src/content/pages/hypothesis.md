---
chapter: 1
---

## Hypothesis

From the creator of [Atomic Design](https://atomicdesign.bradfrost.com/), [Brad Frost identifies a button as an "atomic" element](https://www.youtube.com/watch?v=PK_PICNTgAg); a part that cannot be broken down into further parts. Attempting to do so would result in describing the properties of the button; size, color, roundness, et cetera. Any one of these properties does not itself constitue a button, only specific combinations of property values could render a button.

However, one may argue that there are components that could be identified as buttons which _can_ be broken further. For example, some may consider an icon as a separate component. If that is the case, this could exist within the button and therefore be broken down into an icon part and a button part.

> You may also consider the icon as a glyph, which could exist as a same level as text and therefore not be broken further in this example. This assumes that the properties of text could also affect those of the icon similarly. This study may have a recommendation on which of these categories an icon belongs.

If we travel in the opposite direction and begin to compose larger structures with atomic elements, are these new compositions also components or are they _made from components_ and should be considered something different entirely? In Atomic Design parlance, when is something a molecule or an organism? Are there levels we're missing? Does it matter?

At first thought, a definition for "component" could include an object with purpose different from other objects. So this button component has a purpose; to trigger an action within the current experience. A consideration with this definition is that we can become more specific in purpose and allow for more components. The purpose of a search field is to find entities related to the current experience, but it is often composed of an input field, along with various other parts.

Additionally, how do we consider slight variations? Is a username field the same component as a birth name field? This may be obvious, but should an email field be included in this group? How do we determine when a new kind of component should be considered over a variation of an existing one?

One clue to this question might be what makes this component useful. An input field _should_ come with a label for it to be useful to a user. Importantly, "comes with" does not need to mean visually connected. For example, an input field within a table cell can be labeled by a table header in proximity to the fields. From an engineering standpoint, a button that launches a lightbox could be shipped as one unit. The identification of usefulness comes into conflict the "atomic" method of reduction; the input has its own purpose separate from the label.

If we were to look at the label, at the very least it would need typographic properties. In fact, we could consider any element that provides a read-only state as an atomic component with a collection of typographic properties. While these components _could_ have other stylistic properties such as background color, the purpose of labeling persists regardless of the values provided. That is, until those properties meet the criteria of some other component. We can imagine that including a background color and padding to a label might suggest that this is an interactive element. Certainly, there's a separate study that identifies the padding threshold between a (non-interactive) tag and a (interactive) button.

This raises an interesting point, while any element could receive any number of properties, we supply the values to those properties to suggest their purpose. We could create a slider that controls the value of several stylistic properties to move between a text label, a button, and a filled input.

[INSERT SINGLE INTERACTIVE SLIDER]

In this example, there is a single container which receives different values for its properties. The presented value works with other values for a final affordance. It is also possible that some properties provide more weight to the affordance. For example, the more centered the text is within a padded container, the more it is perceived to be a interactive button among other possibilities.

[INSERT MULTI INTERACTIVE SLIDER]

Could this mean that the container is the component; the host of properties? This seems to make sense, as these are both objects. From here we are providing values to properties, curating each to focus on a final user affordance. The closer we are to meeting the user's expectations in these values, the more likely the user will know what to do in our experience.

However, if we return to the possibility of slight variations, changing the text alignment from center to start (commonly left) alignment is a single change that could radically change the expectation for the component. Meanwhile, the variation between username and birth name is by label content and expected input has (most likely) no visual difference past the content.

We ask, are there any examples of a change of content which affects the general purpose of a component? This is different from comparing "Back" and "Next" buttons. While the specific function of these will be different, they still expect the same approach and type of interaction; a tap of the target. Certainly one example could be replacing the buttons' content with a spinner to indicate that the element is no longer interactive. This introduces a few additional questions:

### Is a non-interactive button still a button?

When we choose which component to include in an experience, it is most likely meant to represent a main purpose. That component could have additional states depending on the status of the experience. For example, a button could be disabled temporarily while a form is not complete. Because the main objective is to complete the form and move on, including a button to allow the user to move on is critical.

### Is content also a type of component?

Not only is content a component, it is the most obvious form of component because it truly cannot be broken down further. If it was able to be broken further, the subject would be a container and not content. This assumes that "click here" is not broken down into individual glyphs. One or more graphical representations (glyphs or images) delivered as one unit is content.

Looking further into a content component, we expect a difference between a "headline" and "paragraph". Both of these are atomic components and cannot be broken down further. What separates them is style directed by purpose. Importantly, the styles for a headline in one experience, could be the same as a paragraph in a completely separate experience. For example, what would you classify the following treatment: "headline" or "paragraph"?

[INSERT TEXT SIZE DISCLOUSRE]

 A person looking at large text may assume it is meant for a "headline" only until it is compared to other treatments. Additionally, when styles of text are closer, we often assume for them to be in the same family. Using the slider example from earlier, this means that there is some threshold that must be crossed that separates "headline" treatments from "paragraph" treatments. If we continue to focus on size, we understand that the size is conveying importance and hierarchy. The larger the text, the more important the message.

 We could also consider a single "text" component that expects a size to be provided instead of individual components with a size embedded. What are the benefits and detriments of these approaches?

 ### One text component

 When supplying a single text component, there is no confusion about which kind of component to use. There is only one component to apply into an experience for all text needs. This requires many variations past the interior glyphs; size, weight, style, among other properties must be provided. The values for these properties may be abstracted or direct, but the person choosing to use the component is also making decisions past the purpose of the component. This presents much of the design control to the person crafting the specific experience, depending on the component's options.

 ### Many text components

 When supplying many text components, this assumes that the only decision is choosing the right component as each has been preconfigured in a limited number of ways. There could be several factors that contribute to the decision process. From a systems perspective, a purist would recommend that the only factor to consider is purpose; what are you conveying to the user? All other stylistic decisions have been predetermined outside of the context of this last decision. In other words, all text of this purpose will look identical throughout the system. It is up to the maintainer of the system to itemize the different limited configurations based on an enumeration of purpose.

This too, is a spectrum. One could limit the number of configureable properties to zero across several components or expose all of them in a single component with any combination in between. As the number of exposed configurable properties increases, the number of components should decrease because the resulting components would cover most cases given the correct configuration.

Do people know what the proper configurations are? That is, does any person know what the correct arrangement of value sliders is to produce what the largest number of people would identify as a button? In a highly configurable component architecture, we offload the decision making to the application author; they need to know the correct incantation to conjure a headline in the style of the current experience. As one might imagine, this would lead to variations of choice between people and even the same person over time.

Meanwhile, on the opposite side of the spectrum, having a limited set of possible components to choose from suggests a constraint for application authors. Where the system of available components might not support their needs and a more configurable component might have in their opinion. The architecture of a component library suggests where the responsibility of presentational control (UI) is meant to be. In a highly configurable and limited set of components, presentational control is directed toward the application authors. In a vast library of preconfigured components, presentational control is expected to be maintained by the system. Importantly, functional control (UX) is always the application author's responsibility.

A new component can be introduced when the complexity of the current configuration outweighs the time repeating that configuration.
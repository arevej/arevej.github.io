---
title: 'What the curly hell do you pass into `render`?'
---

Back when I started to learn Django, everything seemed so tough.
As the time went and I kept practicing, many things started to make sense to me.
But there was one thing in particular that felt alien...

How the `render` function and the context dictionary that you pass into it play together.

I realize I'm probably not the only one experiencing this problem.
So here's a simple mental model that I came to, which made everything click:

<div style="max-width: 700px; margin: 0 auto;">
  <img src="/post-img/curlu-hell-render/1.png">
</div>

The first one, `index.html`, is the most obvious.
It specifies the name of the HTML template to be rendered.
No questions here.

But what if we need the template to use some variable that we have in the view?

There's the context dictionary for that.
It's simple, really.

The key in the dictionary, `kitty`, will be the name of the variable that we can use in the template.

The value for that key, `cat`, is the name of this variable in the function.

By writing `{'kitty': cat}`, we are basically saying this:

When the template makes use of the `kitty` variable (like {% raw %}`{{ kitty }}`{% endraw %}), use the value of the `cat` variable from the view.

Following the depicted example, {% raw %}`{{ kitty }}`{% endraw %} will be shown as `Murzik` — because that's what the `cat` variable holds.

**See also:**

- [From url to web page: walk through to Django?](/blog/from-url-to-webpage)
- [The simple way to understand Django models](/blog/django-models)

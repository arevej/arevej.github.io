---
title: 'From URL to web page: walk through to Django'
author: Tim Kholod
date: 14 Aug 2017
---

Understanding is one of the most important things when learning to code.
And it's not the easiest — sometimes you just want to bang your head against the wall.
That's what happened to me when I started to learn Django.

Here I want to show you what `urls.py` and `views.py` are for, and how they help a simple URL to become a full web page.

Let's figure it out:

![](../post-img/from_url_to_webpage//urls.png)

Say we open **https://cats.com/cats/** in our browser.

First thing, Django drops the domain from the URL and we are left with **cats/**.
Then Django goes through the URL patterns in `urls.py` (aka the URL rule list) in an attempt to find a rule that would match.

And it finds one.
It's a rule with `name='cats'`.

According to this rule, Django knows which view must be used to handle a request - it's `views.show_all_cats`.

Django calls the `show_all_cats` function (which comes from `views.py`).
Which in turn renders the `cats.html` template.

(For more details about the dictionary in the `render` function, see [What the curly hell do you pass into \`render\`?](/curlu-hell-render/))

And finally, we are full of love for the beautiful purr-y creatures.

![](https://media.giphy.com/media/ExMGjbktr4phe/giphy.gif)

**See also:**

- [The simple way to understand Django models](/django-models/)

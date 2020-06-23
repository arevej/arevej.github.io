---
title: 'The simple way to understand Django models'
date: '18 Aug 2017'
---

If you ever tried to learn models by going through Django Docs, did you leave with answers, or with even more questions?

Personally, I started doubting whether programming is really for me.

<img style="max-width: 300px;" src="https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif">

I wrote this post to help you understand Django models and basic operations with them.

Models are an excellent method to work with data!

Say we want to keep track of our amazing cats.
We would create a `Cat` model, but what is a model anyway?

Turns out, a model is kinda three things in one:

<img style="max-width: 700px;" src="/post-img/django_models/1.png">

Now, let's walk through each block.

## Table with cats in database

<img style="max-width: 500px;" src="/post-img/django_models/2.png">

We create a class (= a model) named `Cat`.

When we add columns we must tell Django which kind of data will be in each of them.
That can be string, digits, boolean etc.

So, a cat's name should be a text — it's a `CharField` in Django (don't forget to set the maximum length for this field, because the database needs to know it).
A cat's weight in grams is an integer — so we use an `IntegerField`.

Finally, `null` makes it possible to leave a column blank.
For example, if we don't know the weight.
Note that any field can be marked as `null`.

As an aside: the `id` column is generated automatically.

A finishing touch is to propagate changes (like creating a model, adding a column etc.) into our database schema.
For that we use `python manage.py makemigrations` and then `python manage.py migrate`.
It's important to do it every time you change something in the models.

Now we have a table but we don't have anything inside it.
Let's fix it.

## Operations with all cats

### Creating a new one

<img style="max-width: 500px;" src="/post-img/django_models/3.png">

`create()` function helps us to create some rows.
We just need to pass all the purry details into it.

### Finding a particular one

<img style="max-width: 500px;" src="/post-img/django_models/4.png">

If you want to get cat's <strike>FBI file</strike> meow-xcuse me, the cat's info; then we can just use the `get()` function with one of the cat parameters.
In the example, I use `pk` which means "primary key".
Most often, that would be the same as using `id`.

`get()` will find all rows matching the parameters and only return the first one.

### Finding all the records

<img style="max-width: 500px;" src="/post-img/django_models/5.png">

On top of that, you can access all cats from the database by using the `all()` function.

### Filtering out

<img style="max-width: 500px;" src="/post-img/django_models/6.png">

Or do you need cats lighter than 3000 g?

A function named `filter` is ready to help us with that.

We pass `field__lookuptype = 'value'` into it to filter out the cats.

In the example, `lt` means "less than".
So `weight_g__lt=3000` means "weight is less than 3000 g".

## Operations with one cat

### Updating

<img style="max-width: 500px;" src="/post-img/django_models/7.png">

Last time we weighed Luna, she was 3200 g.
But now her weight is 3100 g.
It's very easy to change that.

We just get Luna from the database by her name, and then change her weight to 3100.
It's that simple.
Just one thing — we have to call `.save()` when we're done changing.

### Deleting, like, forever

<img style="max-width: 500px;" src="/post-img/django_models/8.png">

We can delete one of our cats.
Very sad.
But that's life.

We get _the_ cat and call the `.delete()` function.

**See also:**

- [What the curly hell do you pass into \`render\`?](/blog/curlu-hell-render)
- [From URL to web page: walk through to Django](/blog/from-url-to-webpage)

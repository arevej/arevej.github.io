---
title: 'What are model relationships in Django for?'
---

Relationships between people are complicated; what about between models?

It can seem easy in theory... up to the point when you have to develop your first real app which needs to set up relationships (also know as associations) between models.

As usual, my explanation is going to involve cats.
Lots of them.
So brace yourself.

_This post assumes understanding of Django models.
If you don't know much about them, read [the other post of mine](/blog/django-models)._

### One cat, one owner

Imagine this: Mike has a cat named Luna.

<div style="max-width: 320px; margin: 0 auto;">
  <img src="/post-img/models_relationships/1.png">
</div>

Mike **has only one cat**, Luna, and Luna **has only one owner**, Mike.
Such relationships are called **one-to-one**.

How can we implement it in code?

<div style="max-width: 600px; margin: 0 auto;">
  <img src="/post-img/models_relationships/2.png">
</div>

In database it will look like this:

<div style="max-width: 600px; margin: 0 auto;">
  <img src="/post-img/models_relationships/3.png">
</div>

Luna has the same `id` as their owner (and no `id` of its own)

Here's how you would create a cat for a person:

```python
owner = ...
cat = Cat(owner = owner, name = 'Luna')
cat.save()
```

And here's how you would get the cat for the person:

```python
owner = ...
owner.cat
```

And the owner of the cat:

```python
cat = ...
cat.owner
```

Other examples of one-to-one:

- a user has only one profile;
- a country has only one capital.

### Many cats, one owner

Let's look another example.
People can **have a lot of cats**.

<div style="max-width: 450px; margin: 0 auto;">
  <img src="/post-img/models_relationships/4.png">
</div>

Eva has three cats: Luna, Jasper, and Max.
The relationship between Eva and their cats is called **many-to-one** or **one-to-many**.

In code:

<div style="max-width: 600px; margin: 0 auto;">
  <img src="/post-img/models_relationships/5.png">
</div>

And in database:

<div style="max-width: 600px; margin: 0 auto;">
  <img src="/post-img/models_relationships/6.png">
</div>

You can now create as many cats for a particular person as you want:

```python
owner = ...
owner.cat_set.create(name = 'Luna')
owner.cat_set.create(name = 'Jasper')
owner.cat_set.create(name = 'Max')
```

To get all the cats for a person, you'd do:

```python
owner = ...
owner.cat_set.all()
# gives us a list of cat objects:
# [<Cat Luna>, <Cat Jasper>, <Cat Max>]
```

And to get the owner of a particular cat:

```python
cat = ...
cat.owner
```

Other examples of many-to-one:

- a user can upload many pictures;
- a person can have multiple bank accounts;
- a product listing can have several reviews;
- an author can have several articles.

### Many cats, many owners

Earth has finally embraced polyamory and shit.

<div style="max-width: 450px; margin: 0 auto;">
  <img src="/post-img/models_relationships/7.png">
</div>

So now one cat **has many owners** and one owner **has many cats**.
Here we have three owners: Eva, Alex and Mike.
Eva has Max and Luna; Alex – Max, Luna, and Jasper; Mike – Tigger and Max.
You can notice that Max has three owners: Eva, Alex, and Mike.

<div style="max-width: 600px; margin: 0 auto;">
  <img src="/post-img/models_relationships/8.png">
</div>

In database:

<div style="max-width: 600px; margin: 0 auto;">
  <img src="/post-img/models_relationships/9.png">
</div>

Pay attention to extra orange table which will be created automatically. This extra table creates relationships between models.

So how do we create such polyamory relationships?

First of all we should create cats and owners like this:

```
owner = Owner(name = 'Eva')
owner.save()
...

cat = Cat(name = 'Max')
cat.save()
...
```

The immoral polyamory emerges:

```
owner.cats.add(cat)
```

And here's how we can inspect this relationship by listing all owners of a cat, or all cats of a particular owner:

```
owner.cats.all() # [cat]
cat.owners.all() # [owner]
```

Other examples of many-to-many:

- a virtual basket can contain many products, and a product can be in multiple baskets;
- a person can have accounts at many banks, and a bank can have many clients;
- a book can be written by many authors, and an author can write many books;

**See also:**

- [The simple way to understand Django models](/blog/django-models)
- [From URL to web page: walk through to Django](/blog/from-url-to-webpage)

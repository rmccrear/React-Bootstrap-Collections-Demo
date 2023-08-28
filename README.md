# React Bootstrap Collections

Using React Bootstrap Components that display collections of items...

Most of the Collection components have an Component that contains the items and Item components.

For example a list group has the ListGroup and the ListGroup.Item.

The Carousel has a Carousel and the Carousel.Item.

Question: What other React Bootstrap Components have Items associated with them? Check the Components page and browse through the Components to find you answers: https://react-bootstrap.netlify.app/docs/components/accordion

## Using the container

The usage of each component follows a pattern. To understand the stucture of the pattern it helps to build it bit by bit, rather than all at once.

Let's take an example of the Nav. You can review the documentation here: https://react-bootstrap.netlify.app/docs/components/navs

We'll look at the `BasicExample`.

To try this yourself, first add `<MyNav />` to `App.jsx`. Then starting building out the code in the render function of `MyNav.jsx`.

First, let's add the container.

     <Nav>
     </Nav>

Then, let's add the items.

    <Nav>
      <Nav.Item>
        Snacks
      </Nav.Item>
      <Nav.Item>
        Drinks
      </Nav.Item>
      <Nav.Item>
        Sandwiches
      </Nav.Item>
    </Nav>

Nav.Items have more structure to them. If we add a Nav.Link to each Nav.Item, the CSS will kick in and will give a nice appeance. Try it!

    <Nav>
      <Nav.Item>
        <Nav.Link> Snacks </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link> Drinks </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link> Sandwiches </Nav.Link>
      </Nav.Item>
    </Nav>

To make it more dynamic, we can add `onSelect` to the Nav and `eventKey` to the Nav.Item. (How does this work? The best way to find out is to try it!)

    <Nav
      onSelect={(selected) => alert(selected)}
    >
      <Nav.Item>
        <Nav.Link eventKey="snacks"> 
          Snacks
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="drinks">
          Drinks
        </Nav.Link>
      </Nav.Item>
    </Nav>

We've investigated how this pattern works by starting with the minimal amount of working code possible. Then we add to the structure bit by bit until we have the funcionality we desire.

All the while, we can make sure that the code doesn't break as we add more stucture and more complexity to our code. Using git and taking care to make short hops between test runs will help to ensure we know were are bugs are introduced, so bug hunting is easier.

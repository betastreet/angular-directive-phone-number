# angular-directive-phone-number

Display phone numbers in a consistent fashion. Data-binding, extensions and internationalization supported.

## Examples:

#### Display a phone number:

```
<span phone-number="8886563726"></span>
```

displays '+1-888-656-3726'

--

#### Display an international phone number:

```
<span phone-number="443455559870"></span>
```

displays '+44-345-555-9870'

--

#### Display an phone number with an extension:

```
<span phone-number="8886563726" "250"></span>
```

displays '+1-888-656-3726 x250'

--

####  Data-Binding

```
<span phone-number="{{ vm.phoneNumber }}"></span>
```

dynamic display

--

## Todo:

- dynamic templates for alternative formatting
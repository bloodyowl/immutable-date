import tape from "tape"
import ImmutableDate from ".."

tape("ImmutableDate", (test) => {
  test.equal(
    typeof new ImmutableDate(),
    "object",
    "creates an ImmutableDate instance"
  )
  test.equal(
    new ImmutableDate()._date instanceof Date,
    true,
    "wraps a date instance"
  )
  const testDate = new ImmutableDate()
  test.notEqual(
    testDate.setTime(0),
    testDate,
    "creates a new instance on mutation"
  )
  test.equal(
    typeof testDate.getTime(),
    "number",
    "normally calls the results on getters"
  )
  test.end()
})

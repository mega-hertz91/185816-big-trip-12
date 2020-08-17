export const createInformationTemplate = (route) => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${route.cities}</h1>
         <p class="trip-info__dates">${route.dates}</p>
      </div>
      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">${route.value}</span>
      </p>
    </section>`
  );
};

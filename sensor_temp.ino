#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 4

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup(void)
{
  Serial.begin(9600);
  sensors.begin();
  sensors.setResolution(10); // resolução entre 9 a 12 bits (10 bits = mais rápido e ainda preciso)
}

void loop(void)
{
  sensors.requestTemperatures(); // requisita a leitura
  
  float tempC = sensors.getTempCByIndex(0);
  float tempF = sensors.getTempFByIndex(0);

  Serial.print("Temperatura Celsius: ");
  Serial.print(tempC);
  Serial.print(" - Temperatura Fahrenheit: ");
  Serial.println(tempF);

  delay(500); // lê duas vezes por segundo
}

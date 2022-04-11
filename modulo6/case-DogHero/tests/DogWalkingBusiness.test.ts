import { DogWalkingBusiness } from "../src/business/DogWalkingBusiness";
import { Duration, Status } from "../src/model/DogWalking";
import { DogWalkingDatabaseMock } from "./mocks/dogWalkingDatabaseMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { ValidatorMock } from "./mocks/ValidatorMock";

const dogWalkingBusinessMock = new DogWalkingBusiness(
    new IdGeneratorMock(),
    new ValidatorMock() as any,
    new DogWalkingDatabaseMock() as any
)

describe("Teste do criar passeio", () => {
    test("Erro que deve retornar quando o input está vazio", async () =>{
        expect.assertions
        try {
            await dogWalkingBusinessMock.createWalk({date: "", latitude: "", longitude: "", pets: 0})
        } catch (error: any) {
            expect(error.message).toEqual("É necessário passar as informações de: 'date', 'latitude', 'longitude', 'pets'")
        }
    })
})

describe("Teste de editar passeio", () => {
    test("Erro que deve retornar quando o input está vazio", async () => {
        expect.assertions
        try {
            await dogWalkingBusinessMock.editWalk({id: "" , duration: Duration.TO_DO , status: Status.AGENDADO , price: 0, startTime: "", endTime: "" })
        } catch (error: any) {
            expect(error.message).toEqual("É necessário informar 'id', 'status', 'price', 'duration', 'startTime', 'endTime'")
        }
    })
    test("Erro que deve retornar quando o id do passeio não é encontrado", async () => {
        expect.assertions
        try {
            const test = new DogWalkingDatabaseMock()
            await test.getWalkById("111") 
           
        } catch (error: any) {
            expect(error.message).toEqual("Passeio não encontrado. Informe um 'id' válido")
        }
    })
})
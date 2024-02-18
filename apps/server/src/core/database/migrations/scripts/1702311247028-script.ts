import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('036662c5-1871-4a01-afbb-66f1a096624f', '7Judson21@gmail.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=9', 'closed', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('af131a42-1ec7-4194-b985-0828d7c38303', '13Euna_Corwin16@gmail.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=15', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cc969ce6-3f3b-472d-9dae-a7b4f63752d4', '19Russ_Swaniawski@yahoo.com', 'Jamie Doe', 'https://i.imgur.com/YfJQV5z.png?id=21', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('38412ce1-df04-4c21-848e-94e06a271fd8', '25Cleora16@hotmail.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('72eaf5ed-eb6d-4c4a-92f2-57dac4fbe128', '31Kennith35@gmail.com', 'Morgan Lee', 'https://i.imgur.com/YfJQV5z.png?id=33', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('aed08999-d6ab-411a-9b24-32dc7f56a8a2', '37Clarabelle_Cummings@yahoo.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=39', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1ceacbd9-9984-40d9-a384-77849a5b95a5', '43Gerson.Hammes@hotmail.com', 'Jamie Doe', 'https://i.imgur.com/YfJQV5z.png?id=45', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8aba4c87-9bc6-4ef0-9d6d-78b912691f5c', '49Izabella48@hotmail.com', 'Jamie Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'closed', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('59078fb7-f347-401c-99f0-dfad22988b25', '55Genesis_Gerhold25@gmail.com', 'Chris Johnson', 'https://i.imgur.com/YfJQV5z.png?id=57', 'closed', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d2e5a33f-2752-4e24-b5b2-10afb17a44e7', 'Account Update', 'Your yearly financial review is now available.', 'Review Department', '64Amanda18@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', 'aed08999-d6ab-411a-9b24-32dc7f56a8a2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8b255968-ba74-46de-bb7b-3bb99cebf581', 'Yearly Review', 'Your yearly financial review is now available.', 'Security Alerts', '71Louisa_Graham@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '1ceacbd9-9984-40d9-a384-77849a5b95a5');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eb43b7b2-455d-40b8-9ccb-d642ff0afe16', 'Account Update', 'A withdrawal has been detected.', 'Review Department', '78Rhiannon43@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '036662c5-1871-4a01-afbb-66f1a096624f');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('63525fb5-863b-4e8a-a475-5e841b807a17', 'Deposit Alert', 'Your monthly financial summary is ready.', 'Customer Support', '85Tristian_Glover16@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'af131a42-1ec7-4194-b985-0828d7c38303');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a1e8f366-e941-4895-9b3f-44d1542cf55f', 'Yearly Review', 'A deposit has been made to your account.', 'Account Manager', '92Jules_Schamberger-Bins@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '72eaf5ed-eb6d-4c4a-92f2-57dac4fbe128');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('033179ce-ee0f-4763-9985-c3a5e39a8f86', 'Deposit Alert', 'A withdrawal has been detected.', 'Customer Support', '99Monique.Pfeffer8@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '8aba4c87-9bc6-4ef0-9d6d-78b912691f5c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('61ab843e-754f-4989-b048-eaef363e3107', 'Monthly Summary', 'Your monthly financial summary is ready.', 'Financio Team', '106Jenifer.Schneider-Schaefer65@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'aed08999-d6ab-411a-9b24-32dc7f56a8a2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ad6dc080-7901-424b-be75-3f990cda21dc', 'Monthly Summary', 'A withdrawal has been detected.', 'Security Alerts', '113Litzy95@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'af131a42-1ec7-4194-b985-0828d7c38303');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c3df5006-8abe-4b15-ac23-30c5fd37dd64', 'Yearly Review', 'A deposit has been made to your account.', 'Review Department', '120Jerrod.Vandervort6@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a41c3cb2-21b0-4d6e-a7ce-9acb502a7e6f', 'Deposit Alert', 'A deposit has been made to your account.', 'Review Department', '127Rupert22@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '59078fb7-f347-401c-99f0-dfad22988b25');

INSERT INTO "account" ("id", "name", "userId") VALUES ('9b3bfd80-7f44-43f0-b68a-2efdfac7785f', 'Retirement Account', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "account" ("id", "name", "userId") VALUES ('0be34811-6398-46fd-bc81-48aaa430a7d9', 'Savings Account', '8aba4c87-9bc6-4ef0-9d6d-78b912691f5c');
INSERT INTO "account" ("id", "name", "userId") VALUES ('30978130-883c-4f20-b1a7-efcafe847b99', 'Retirement Account', '036662c5-1871-4a01-afbb-66f1a096624f');
INSERT INTO "account" ("id", "name", "userId") VALUES ('dca15cbc-25c9-4960-994f-3c4dc83afd0c', 'Investment Portfolio', '036662c5-1871-4a01-afbb-66f1a096624f');
INSERT INTO "account" ("id", "name", "userId") VALUES ('a106a541-6648-48e4-b8d2-aa5f4ade466a', 'Vacation Fund', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "account" ("id", "name", "userId") VALUES ('c616517d-8c84-42d5-a6fc-79e364f343cc', 'Retirement Account', 'cc969ce6-3f3b-472d-9dae-a7b4f63752d4');
INSERT INTO "account" ("id", "name", "userId") VALUES ('233ca44d-b293-4881-9074-76853332c31d', 'Emergency Fund', '036662c5-1871-4a01-afbb-66f1a096624f');
INSERT INTO "account" ("id", "name", "userId") VALUES ('949b0320-7d1d-4bb6-94d6-22b28830cf57', 'Vacation Fund', '1ceacbd9-9984-40d9-a384-77849a5b95a5');
INSERT INTO "account" ("id", "name", "userId") VALUES ('6855b826-dd71-45dd-a7b2-01c6b613274e', 'Investment Portfolio', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "account" ("id", "name", "userId") VALUES ('b13bea36-b6e7-4a42-953d-4f35c0aa9bbb', 'Savings Account', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('ccd18b26-dd26-4624-824a-96191969e965', 341, 'deposit', '2023-03-05T19:44:11.504Z', '233ca44d-b293-4881-9074-76853332c31d');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('6173b274-7dee-4e64-a9de-f391359c020f', 155, 'deposit', '2023-04-04T21:40:22.485Z', 'dca15cbc-25c9-4960-994f-3c4dc83afd0c');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('0d18b0be-bfe9-4e81-874b-64adb8c6fae4', 699, 'deposit', '2024-12-28T23:20:37.838Z', '233ca44d-b293-4881-9074-76853332c31d');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('46b28ec6-acec-460e-958f-da456af6b181', 860, 'deposit', '2024-02-04T17:15:10.962Z', '9b3bfd80-7f44-43f0-b68a-2efdfac7785f');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('f9efad1a-e274-4cc5-8ec4-efe777cf945d', 374, 'deposit', '2024-04-19T21:39:40.156Z', '30978130-883c-4f20-b1a7-efcafe847b99');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('7fadec6f-d5f2-4c40-b555-5fc2fa25ea32', 594, 'withdrawal', '2023-07-06T19:40:14.961Z', 'dca15cbc-25c9-4960-994f-3c4dc83afd0c');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('c2822b30-87bc-4951-9dc2-4fa69822427a', 972, 'withdrawal', '2023-06-19T14:22:24.242Z', 'c616517d-8c84-42d5-a6fc-79e364f343cc');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('265fe89d-7fc8-447a-ae65-4302d96de9aa', 937, 'withdrawal', '2024-01-27T05:14:34.267Z', '949b0320-7d1d-4bb6-94d6-22b28830cf57');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('bc2177e8-66a8-47a4-ab51-173496e0e686', 954, 'deposit', '2024-12-28T19:26:37.332Z', '9b3bfd80-7f44-43f0-b68a-2efdfac7785f');
INSERT INTO "transaction" ("id", "amount", "type", "date", "accountId") VALUES ('0b8792a0-4a3f-4574-9f5d-a3527618f301', 577, 'deposit', '2023-04-12T13:29:02.941Z', '9b3bfd80-7f44-43f0-b68a-2efdfac7785f');

INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('27ab1546-4450-40a3-be7b-78f33cd585b5', 532, '2023-04-30T07:57:40.671Z', 'dca15cbc-25c9-4960-994f-3c4dc83afd0c');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('4d5851b6-a7a1-4174-839a-d90a01360c91', 560, '2024-01-26T17:02:15.496Z', '233ca44d-b293-4881-9074-76853332c31d');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('f57318b8-4173-4a83-bd12-df28dabc27c8', 948, '2023-09-05T14:50:54.281Z', '30978130-883c-4f20-b1a7-efcafe847b99');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('c9d9d162-3eba-498c-9444-da6718bbc8dd', 376, '2023-12-14T03:56:50.739Z', '9b3bfd80-7f44-43f0-b68a-2efdfac7785f');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('8c975f37-7090-4571-8d87-7376a8939eed', 50, '2024-06-20T10:58:06.526Z', '6855b826-dd71-45dd-a7b2-01c6b613274e');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('5cfa1426-5fa7-427a-83e2-004d2872b0e3', 276, '2024-04-11T15:20:08.286Z', '30978130-883c-4f20-b1a7-efcafe847b99');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('b10425c1-fae3-47f1-b2d0-7f3480794b4a', 432, '2023-07-24T11:46:53.957Z', '233ca44d-b293-4881-9074-76853332c31d');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('51be16ca-0c62-4de2-b47c-4582db349bf0', 863, '2023-04-13T17:41:11.161Z', '30978130-883c-4f20-b1a7-efcafe847b99');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('d7c36eaa-a2c5-41eb-9d64-7c27d0b522fe', 505, '2025-01-10T19:27:52.492Z', '233ca44d-b293-4881-9074-76853332c31d');
INSERT INTO "account_balance" ("id", "balance", "balanceDate", "accountId") VALUES ('a08207d2-88e8-42f0-9f81-58e6100737ca', 209, '2023-10-29T07:11:02.067Z', '949b0320-7d1d-4bb6-94d6-22b28830cf57');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberServices = void 0;
const prisma_1 = __importDefault(require("../../../utils/prisma"));
const createMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const memberData = yield prisma_1.default.member.findUnique({
        where: {
            email: payload.email,
        },
    });
    // check if the member already exists
    if (memberData) {
        throw new Error(`This member already exists`);
    }
    const result = yield prisma_1.default.member.create({
        data: payload,
    });
    return result;
});
// retrieve all members
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findMany();
    return result;
});
// retrieve all members
const getSingleMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findUnique({
        where: {
            memberId
        }
    });
    return result;
});
// update single member
const updateMemberIntoDB = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const memberData = yield prisma_1.default.member.findUnique({
        where: {
            memberId
        }
    });
    // check if member exists
    if (!memberData) {
        throw new Error('Member does not exist');
    }
    const result = yield prisma_1.default.member.update({
        where: {
            memberId
        },
        data: payload
    });
    return result;
});
// delete single member
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const memberData = yield prisma_1.default.member.findUnique({
        where: {
            memberId
        }
    });
    // check if member exists
    if (!memberData) {
        throw new Error('Member does not exist');
    }
    const result = yield prisma_1.default.member.delete({
        where: {
            memberId
        }
    });
    return result;
});
exports.memberServices = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getSingleMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};

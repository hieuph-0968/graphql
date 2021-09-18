import { bookResolvers } from './bookResolver';
import { authorResolvers } from './authorResolver';
import { merge } from "lodash";

export const resolvers =  merge(authorResolvers, bookResolvers);
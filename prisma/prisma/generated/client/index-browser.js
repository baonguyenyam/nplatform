
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  content: 'content',
  parent: 'parent',
  type: 'type',
  createdAt: 'createdAt',
  published: 'published',
  status: 'status',
  setorder: 'setorder'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  slug: 'slug',
  image: 'image',
  published: 'published',
  status: 'status',
  userId: 'userId',
  type: 'type',
  data: 'data',
  setorder: 'setorder'
};

exports.Prisma.PostMetaScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  key: 'key',
  value: 'value',
  postId: 'postId'
};

exports.Prisma.FileScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hash: 'hash',
  name: 'name',
  ext: 'ext',
  size: 'size',
  url: 'url',
  type: 'type',
  data: 'data',
  published: 'published',
  status: 'status',
  userId: 'userId'
};

exports.Prisma.SettingScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  phone: 'phone',
  first_name: 'first_name',
  last_name: 'last_name',
  image: 'image',
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
  company: 'company',
  avatar: 'avatar',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  published: 'published',
  data: 'data'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  status: 'status',
  total: 'total',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  image: 'image',
  published: 'published',
  data: 'data',
  date_created: 'date_created',
  date_production: 'date_production',
  date_paid: 'date_paid',
  date_shipped: 'date_shipped',
  date_delivered: 'date_delivered',
  date_completed: 'date_completed',
  date_cancelled: 'date_cancelled',
  date_refunded: 'date_refunded',
  date_failed: 'date_failed',
  date_closed: 'date_closed',
  date_approved: 'date_approved'
};

exports.Prisma.OrderMetaScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  key: 'key',
  value: 'value',
  orderId: 'orderId'
};

exports.Prisma.AttributeScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  type: 'type',
  mapto: 'mapto',
  published: 'published',
  childrenId: 'childrenId'
};

exports.Prisma.AttributeMetaScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  key: 'key',
  value: 'value',
  data: 'data',
  attributeId: 'attributeId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  phone: 'phone',
  first_name: 'first_name',
  last_name: 'last_name',
  image: 'image',
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
  avatar: 'avatar',
  role: 'role',
  isTwoFactorEnabled: 'isTwoFactorEnabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  published: 'published',
  data: 'data'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.PasswordResetTokenScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.TwoFactorTokenScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.TwoFactorConfirmationScalarFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  title: 'title',
  slug: 'slug',
  content: 'content',
  type: 'type',
  status: 'status'
};

exports.Prisma.PostOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content',
  slug: 'slug',
  image: 'image',
  status: 'status',
  userId: 'userId',
  type: 'type',
  data: 'data'
};

exports.Prisma.PostMetaOrderByRelevanceFieldEnum = {
  key: 'key',
  value: 'value'
};

exports.Prisma.FileOrderByRelevanceFieldEnum = {
  hash: 'hash',
  name: 'name',
  ext: 'ext',
  url: 'url',
  type: 'type',
  data: 'data',
  status: 'status',
  userId: 'userId'
};

exports.Prisma.SettingOrderByRelevanceFieldEnum = {
  key: 'key',
  value: 'value'
};

exports.Prisma.CustomerOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  first_name: 'first_name',
  last_name: 'last_name',
  image: 'image',
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
  company: 'company',
  avatar: 'avatar',
  type: 'type',
  data: 'data'
};

exports.Prisma.OrderOrderByRelevanceFieldEnum = {
  id: 'id',
  status: 'status',
  title: 'title',
  content: 'content',
  image: 'image',
  data: 'data'
};

exports.Prisma.OrderMetaOrderByRelevanceFieldEnum = {
  key: 'key',
  value: 'value',
  orderId: 'orderId'
};

exports.Prisma.AttributeOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content',
  type: 'type',
  mapto: 'mapto'
};

exports.Prisma.AttributeMetaOrderByRelevanceFieldEnum = {
  key: 'key',
  value: 'value',
  data: 'data'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  first_name: 'first_name',
  last_name: 'last_name',
  image: 'image',
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
  avatar: 'avatar',
  data: 'data'
};

exports.Prisma.AccountOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.VerificationTokenOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token'
};

exports.Prisma.PasswordResetTokenOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token'
};

exports.Prisma.TwoFactorTokenOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token'
};

exports.Prisma.TwoFactorConfirmationOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MODERATOR: 'MODERATOR'
};

exports.Prisma.ModelName = {
  Category: 'Category',
  Post: 'Post',
  PostMeta: 'PostMeta',
  File: 'File',
  Setting: 'Setting',
  Customer: 'Customer',
  Order: 'Order',
  OrderMeta: 'OrderMeta',
  Attribute: 'Attribute',
  AttributeMeta: 'AttributeMeta',
  User: 'User',
  Account: 'Account',
  VerificationToken: 'VerificationToken',
  PasswordResetToken: 'PasswordResetToken',
  TwoFactorToken: 'TwoFactorToken',
  TwoFactorConfirmation: 'TwoFactorConfirmation'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RoleUser = _interopRequireDefault(require("./RoleUser"));

var _SchemasUserResponseAllOf = _interopRequireDefault(require("./SchemasUserResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserResponse model module.
 * @module model/UserResponse
 * @version 3.0.0-alpha1
 */
var UserResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserResponse</code>.
   * @alias module:model/UserResponse
   */
  function UserResponse() {
    _classCallCheck(this, UserResponse);

    UserResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponse} obj Optional instance to populate.
     * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserResponse();

        if (data.hasOwnProperty('limit_services')) {
          obj['limit_services'] = _ApiClient["default"].convertToType(data['limit_services'], 'Boolean');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('require_new_password')) {
          obj['require_new_password'] = _ApiClient["default"].convertToType(data['require_new_password'], 'Boolean');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _RoleUser["default"].constructFromObject(data['role']);
        }

        if (data.hasOwnProperty('two_factor_auth_enabled')) {
          obj['two_factor_auth_enabled'] = _ApiClient["default"].convertToType(data['two_factor_auth_enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('two_factor_setup_required')) {
          obj['two_factor_setup_required'] = _ApiClient["default"].convertToType(data['two_factor_setup_required'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('email_hash')) {
          obj['email_hash'] = _ApiClient["default"].convertToType(data['email_hash'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserResponse;
}();
/**
 * Indicates that the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */


UserResponse.prototype['limit_services'] = undefined;
/**
 * Indicates whether the is account is locked for editing or not.
 * @member {Boolean} locked
 */

UserResponse.prototype['locked'] = undefined;
/**
 * The login associated with the user (typically, an email address).
 * @member {String} login
 */

UserResponse.prototype['login'] = undefined;
/**
 * The real life name of the user.
 * @member {String} name
 */

UserResponse.prototype['name'] = undefined;
/**
 * Indicates if a new password is required at next login.
 * @member {Boolean} require_new_password
 */

UserResponse.prototype['require_new_password'] = undefined;
/**
 * @member {module:model/RoleUser} role
 */

UserResponse.prototype['role'] = undefined;
/**
 * Indicates if 2FA is enabled on the user.
 * @member {Boolean} two_factor_auth_enabled
 */

UserResponse.prototype['two_factor_auth_enabled'] = undefined;
/**
 * Indicates if 2FA is required by the user's customer account.
 * @member {Boolean} two_factor_setup_required
 */

UserResponse.prototype['two_factor_setup_required'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

UserResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

UserResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

UserResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

UserResponse.prototype['customer_id'] = undefined;
/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */

UserResponse.prototype['email_hash'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} id
 */

UserResponse.prototype['id'] = undefined;
var _default = UserResponse;
exports["default"] = _default;
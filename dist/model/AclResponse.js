"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Acl = _interopRequireDefault(require("./Acl"));

var _AclResponseAllOf = _interopRequireDefault(require("./AclResponseAllOf"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AclResponse model module.
 * @module model/AclResponse
 * @version 3.0.0-alpha1
 */
var AclResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AclResponse</code>.
   * @alias module:model/AclResponse
   * @implements module:model/Acl
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/AclResponseAllOf
   */
  function AclResponse() {
    _classCallCheck(this, AclResponse);

    _Acl["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _AclResponseAllOf["default"].initialize(this);

    AclResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AclResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AclResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclResponse} obj Optional instance to populate.
     * @return {module:model/AclResponse} The populated <code>AclResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AclResponse();

        _Acl["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _AclResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AclResponse;
}();
/**
 * Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
 * @member {String} name
 */


AclResponse.prototype['name'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

AclResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

AclResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

AclResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

AclResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

AclResponse.prototype['version'] = undefined;
/**
 * Alphanumeric string identifying a ACL.
 * @member {String} id
 */

AclResponse.prototype['id'] = undefined; // Implement Acl interface:

/**
 * Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
 * @member {String} name
 */

_Acl["default"].prototype['name'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined; // Implement AclResponseAllOf interface:

/**
 * Alphanumeric string identifying a ACL.
 * @member {String} id
 */

_AclResponseAllOf["default"].prototype['id'] = undefined;
var _default = AclResponse;
exports["default"] = _default;
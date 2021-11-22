"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasVersionResponse = _interopRequireDefault(require("./SchemasVersionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceListResponseAllOf model module.
 * @module model/ServiceListResponseAllOf
 * @version 3.0.0-alpha1
 */
var ServiceListResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceListResponseAllOf</code>.
   * @alias module:model/ServiceListResponseAllOf
   */
  function ServiceListResponseAllOf() {
    _classCallCheck(this, ServiceListResponseAllOf);

    ServiceListResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceListResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceListResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceListResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceListResponseAllOf} The populated <code>ServiceListResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceListResponseAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_SchemasVersionResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceListResponseAllOf;
}();
/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */


ServiceListResponseAllOf.prototype['id'] = undefined;
/**
 * Current [version](/reference/api/services/version/) of the service.
 * @member {Number} version
 */

ServiceListResponseAllOf.prototype['version'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */

ServiceListResponseAllOf.prototype['versions'] = undefined;
var _default = ServiceListResponseAllOf;
exports["default"] = _default;
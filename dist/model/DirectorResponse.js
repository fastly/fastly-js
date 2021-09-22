"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Director = _interopRequireDefault(require("./Director"));

var _SchemasBackend = _interopRequireDefault(require("./SchemasBackend"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DirectorResponse model module.
 * @module model/DirectorResponse
 * @version 3.0.0-alpha1
 */
var DirectorResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DirectorResponse</code>.
   * @alias module:model/DirectorResponse
   */
  function DirectorResponse() {
    _classCallCheck(this, DirectorResponse);

    DirectorResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectorResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DirectorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectorResponse} obj Optional instance to populate.
     * @return {module:model/DirectorResponse} The populated <code>DirectorResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectorResponse();

        if (data.hasOwnProperty('backends')) {
          obj['backends'] = _ApiClient["default"].convertToType(data['backends'], [_SchemasBackend["default"]]);
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('quorum')) {
          obj['quorum'] = _ApiClient["default"].convertToType(data['quorum'], 'Number');
        }

        if (data.hasOwnProperty('retries')) {
          obj['retries'] = _ApiClient["default"].convertToType(data['retries'], 'Number');
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
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
      }

      return obj;
    }
  }]);

  return DirectorResponse;
}();
/**
 * List of backends associated to a director.
 * @member {Array.<module:model/SchemasBackend>} backends
 */


DirectorResponse.prototype['backends'] = undefined;
/**
 * Unused.
 * @member {Number} capacity
 */

DirectorResponse.prototype['capacity'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

DirectorResponse.prototype['comment'] = undefined;
/**
 * Name for the Director.
 * @member {String} name
 */

DirectorResponse.prototype['name'] = undefined;
/**
 * The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
 * @member {Number} quorum
 * @default 75
 */

DirectorResponse.prototype['quorum'] = 75;
/**
 * How many backends to search if it fails.
 * @member {Number} retries
 * @default 5
 */

DirectorResponse.prototype['retries'] = 5;
/**
 * Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */

DirectorResponse.prototype['shield'] = 'null';
/**
 * What type of load balance group to use.
 * @member {module:model/DirectorResponse.TypeEnum} type
 * @default TypeEnum.random
 */

DirectorResponse.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

DirectorResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

DirectorResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

DirectorResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

DirectorResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

DirectorResponse.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {Number}
 * @readonly
 */

DirectorResponse['TypeEnum'] = {
  /**
   * value: 1
   * @const
   */
  "random": 1,

  /**
   * value: 3
   * @const
   */
  "hash": 3,

  /**
   * value: 4
   * @const
   */
  "client": 4
};
var _default = DirectorResponse;
exports["default"] = _default;
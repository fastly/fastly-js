"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsActivation = _interopRequireDefault(require("./RelationshipsForTlsActivation"));

var _TypeTlsActivation = _interopRequireDefault(require("./TypeTlsActivation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsActivationData model module.
 * @module model/TlsActivationData
 * @version 3.0.0-alpha1
 */
var TlsActivationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsActivationData</code>.
   * @alias module:model/TlsActivationData
   */
  function TlsActivationData() {
    _classCallCheck(this, TlsActivationData);

    TlsActivationData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsActivationData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsActivationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsActivationData} obj Optional instance to populate.
     * @return {module:model/TlsActivationData} The populated <code>TlsActivationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsActivationData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsActivation["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsActivation["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return TlsActivationData;
}();
/**
 * @member {module:model/TypeTlsActivation} type
 */


TlsActivationData.prototype['type'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsActivation} relationships
 */

TlsActivationData.prototype['relationships'] = undefined;
var _default = TlsActivationData;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsActivationTlsActivation = _interopRequireDefault(require("./RelationshipTlsActivationTlsActivation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsActivation model module.
 * @module model/RelationshipTlsActivation
 * @version 3.0.0-alpha1
 */
var RelationshipTlsActivation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsActivation</code>.
   * @alias module:model/RelationshipTlsActivation
   */
  function RelationshipTlsActivation() {
    _classCallCheck(this, RelationshipTlsActivation);

    RelationshipTlsActivation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsActivation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsActivation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsActivation} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsActivation} The populated <code>RelationshipTlsActivation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsActivation();

        if (data.hasOwnProperty('tls_activation')) {
          obj['tls_activation'] = _RelationshipTlsActivationTlsActivation["default"].constructFromObject(data['tls_activation']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsActivation;
}();
/**
 * @member {module:model/RelationshipTlsActivationTlsActivation} tls_activation
 */


RelationshipTlsActivation.prototype['tls_activation'] = undefined;
var _default = RelationshipTlsActivation;
exports["default"] = _default;